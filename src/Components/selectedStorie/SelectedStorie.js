import React, { useEffect } from 'react';
import { getStorie, loadingCharacters } from '../../Actions/StoriesActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import History from '../history/History';
import { PageHeader, Row, List, Tabs } from 'antd';
import { Title, Show } from '../globalStyles/Index';

const { TabPane } = Tabs;

const SelectedStorie = () => {
	let { id } = useParams();
	const { storie, loading } = useSelector((state) => state.stories);
	let { results } = storie;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getStorie(id));
	}, []);

	const Content = ({ children }) => (
		<Row>
			<div style={{ flex: 1, padding: 10 }}>{children}</div>
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
					<PageHeader title={results[0]?.title}>
						<Content>{results[0]?.description}</Content>
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
						<TabPane tab="Comics" key="2">
							<List
								itemLayout="horizontal"
								dataSource={results[0]?.comics?.items}
								renderItem={(item) => (
									<List.Item
										actions={[
											<Show
												onClick={() =>
													handleRedirect(
														'comic',
														'/comics/',
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
															'comic',
															'/comics/',
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
						<TabPane tab="Characters" key="3">
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

export default SelectedStorie;
