import React, { useEffect } from 'react';
import { getComicById } from '../../Actions/ComicsActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import History from '../history/History';
import LoadingView from '../loadingView/LoadingView';
import Gallery from '../Gallery/Gallery';
import { PageHeader, Tag, Row, Tabs, List } from 'antd';

import { Title, Show } from '../globalStyles/Index';
const { TabPane } = Tabs;

const SelectedComic = () => {
	let { id } = useParams();
	const { comic, loading } = useSelector((state) => state.comics);
	let { results } = comic;
	console.log(results);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getComicById(id));
	}, []);

	const Content = ({ children }) => (
		<Row>
			<div style={{ flex: 1 }}>{children}</div>
		</Row>
	);
	const handleRedirect = (path, regex, id) => {
		var id = id.replace(new RegExp('.*' + regex), '');
		History.push(`/${path}/${id}`);
	};

	return (
		<div>
			{loading && <LoadingView />}
			{!loading && results && (
				<div>
					<PageHeader
						title={results[0]?.title}
						tags={<Tag color="blue">{results[0]?.format}</Tag>}
					>
						<Content>{results[0]?.description}</Content>
					</PageHeader>
					<Title>Gallery</Title>
					<Gallery images={results[0]?.images} />
					<Title>Information</Title>
					<Tabs defaultActiveKey="1">
						<TabPane tab="Stories" key="1">
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
						<TabPane tab="Characters" key="2">
							<List
								itemLayout="horizontal"
								dataSource={results[0]?.characters?.items}
								renderItem={(item) => (
									<List.Item
										actions={[
											<Show
												onClick={() =>
													handleRedirect(
														'character',
														'/characters/',
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
															'character',
															'/characters/',
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
					</Tabs>
				</div>
			)}
		</div>
	);
};

export default SelectedComic;
