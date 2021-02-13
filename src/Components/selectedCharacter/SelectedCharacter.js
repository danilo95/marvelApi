import React, { useEffect } from 'react';
import {
	getCharacterById,
	loadingCharacters,
	loadingCharactersComics,
	getCharacterComics,
} from '../../Actions/CharactersActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import { PageHeader, Image, Row, List, Tabs, Button } from 'antd';
import History from '../history/History';
import { Title, Show } from '../globalStyles/Index';
const { TabPane } = Tabs;

const SelectedCharacter = () => {
	let { id } = useParams();
	const { character, loading, characterComics, loadingComics } = useSelector(
		(state) => state.characters
	);
	let { total, offset } = characterComics;
	let { results } = character;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getCharacterById(id));
		dispatch(loadingCharactersComics());
		dispatch(getCharacterComics(id, 0));
	}, []);

	const handleRedirect = (path, regex, id) => {
		var id = id.replace(new RegExp('.*' + regex), '');
		History.push(`/${path}/${id}`);
	};

	const Content = ({ children, extraContent }) => (
		<Row>
			<div>{extraContent}</div>
			<div style={{ flex: 1, padding: 10 }}>{children}</div>
		</Row>
	);

	const onLoadMore = () => {
		dispatch(loadingCharactersComics());
		dispatch(getCharacterComics(id, offset + 20));
	};

	const loadMore = !loadingComics ? (
		<div
			style={{
				textAlign: 'center',
				marginTop: 12,
				height: 32,
				lineHeight: '32px',
			}}
		>
			<Button onClick={onLoadMore}>More Comics</Button>
		</div>
	) : null;

	return (
		<div>
			{loading && <LoadingView />}
			{!loading && results && (
				<div>
					<PageHeader title={results[0]?.name}>
						<Content
							extraContent={
								<Image
									width={200}
									src={`${results[0]?.thumbnail?.path}.${results[0]?.thumbnail?.extension}`}
								/>
							}
						>
							{results[0]?.description}
						</Content>
					</PageHeader>
					<Title>Information</Title>
					<Tabs defaultActiveKey="1">
						<TabPane tab="Series" key="1">
							<List
								itemLayout="horizontal"
								dataSource={results[0]?.series?.items}
								renderItem={(item) => (
									<List.Item
										actions={[
											<Show
												onClick={() =>
													handleRedirect(
														'serie',
														'/series/',
														item.resourceURI
													)
												}
											>
												Show
											</Show>,
										]}
									>
										<List.Item.Meta
											title={
												<Show
													onClick={() =>
														handleRedirect(
															'serie',
															'/series/',
															item.resourceURI
														)
													}
												>
													{item.name}
												</Show>
											}
										/>
									</List.Item>
								)}
							/>
						</TabPane>
						<TabPane tab="Stories" key="2">
							<List
								itemLayout="horizontal"
								dataSource={results[0]?.stories?.items}
								renderItem={(item) => (
									<List.Item
										actions={[
											<Show
												onClick={() =>
													handleRedirect(
														'storie',
														'/stories/',
														item.resourceURI
													)
												}
											>
												Show
											</Show>,
										]}
									>
										<List.Item.Meta
											title={
												<Show
													onClick={() =>
														handleRedirect(
															'storie',
															'/stories/',
															item.resourceURI
														)
													}
												>
													{item.name}
												</Show>
											}
										/>
									</List.Item>
								)}
							/>
						</TabPane>
						<TabPane tab="Comics" key="3">
							<List
								itemLayout="horizontal"
								dataSource={characterComics?.results}
								loading={loadingComics}
								loadMore={loadMore}
								renderItem={(item) => (
									<List.Item
										actions={[
											<Show
												onClick={() =>
													handleRedirect(
														'storie',
														'/stories/',
														item.resourceURI
													)
												}
											>
												Show
											</Show>,
										]}
									>
										<List.Item.Meta
											title={
												<Show
													onClick={() =>
														handleRedirect(
															'storie',
															'/stories/',
															item.resourceURI
														)
													}
												>
													{item.title}
												</Show>
											}
										/>
									</List.Item>
								)}
							/>
						</TabPane>
					</Tabs>
				</div>
			)}
		</div>
	);
};

export default SelectedCharacter;
