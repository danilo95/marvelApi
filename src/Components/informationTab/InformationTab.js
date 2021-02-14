import React from 'react';
import { Tabs, List } from 'antd';
import { Show } from '../globalStyles/Index';
import FavoriteItem from '../favoriteItem/FavoriteItem';

const { TabPane } = Tabs;

const InformationTab = ({
	characterComics,
	loadingComics,
	loadMoreComics,
	characterSeries,
	loadingSeries,
	loadMoreSeries,
	characterStories,
	loadingStories,
	loadMoreStories,
	handleRedirect,
}) => {
	return (
		<Tabs defaultActiveKey="1">
			<TabPane tab="Series" key="1">
				<List
					itemLayout="horizontal"
					dataSource={characterSeries || []}
					loading={loadingSeries}
					loadMore={loadMoreSeries}
					renderItem={(item) => (
						<List.Item
							actions={[
								<Show
									onClick={() =>
										handleRedirect(`/serie/${item.id}`)
									}
								>
									Show
								</Show>,
								<FavoriteItem
									id={item.id}
									title={item.title}
									type={'serie'}
									img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
								/>,
							]}
						>
							<List.Item.Meta
								title={
									<Show
										onClick={() =>
											handleRedirect(`/serie/${item.id}`)
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
			<TabPane tab="Stories" key="2">
				<List
					itemLayout="horizontal"
					dataSource={characterStories || []}
					loading={loadingStories}
					loadMore={loadMoreStories}
					renderItem={(item) => (
						<List.Item
							actions={[
								<Show
									onClick={() =>
										handleRedirect(`/storie/${item.id}`)
									}
								>
									Show
								</Show>,
								<FavoriteItem
									id={item.id}
									title={item.title}
									type={'storie'}
									img={null}
								/>,
							]}
						>
							<List.Item.Meta
								title={
									<Show
										onClick={() =>
											handleRedirect(`/storie/${item.id}`)
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
			<TabPane tab="Comics" key="3">
				<List
					itemLayout="horizontal"
					dataSource={characterComics || []}
					loading={loadingComics}
					loadMore={loadMoreComics}
					renderItem={(item) => (
						<List.Item
							actions={[
								<Show
									onClick={() =>
										handleRedirect(`/comic/${item.id}`)
									}
								>
									Show
								</Show>,
								<FavoriteItem
									id={item.id}
									title={item.title}
									type={'comic'}
									img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
								/>,
							]}
						>
							<List.Item.Meta
								title={
									<Show
										onClick={() =>
											handleRedirect(`/comic/${item.id}`)
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
	);
};

export default InformationTab;
