import React from 'react';
import { Tabs, List } from 'antd';
import { Show } from '../globalStyles/Index';
const { TabPane } = Tabs;

const InformationTab = ({ characterComics, loadingComics, loadMoreComics }) => {
	return (
		<Tabs defaultActiveKey="1">
			<TabPane tab="Series" key="1">
				<List
					itemLayout="horizontal"
					dataSource={[]}
					renderItem={(item) => (
						<List.Item
							actions={[
								<Show onClick={() => console.log('series')}>
									Show
								</Show>,
							]}
						>
							<List.Item.Meta
								title={
									<Show
										onClick={() => console.log('redirect')}
									>
										titulo
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
					dataSource={[]}
					renderItem={(item) => (
						<List.Item
							actions={[
								<Show onClick={() => console.log('redirect')}>
									Show
								</Show>,
							]}
						>
							<List.Item.Meta
								title={
									<Show
										onClick={() => console.log('redirect')}
									>
										titulo
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
								<Show onClick={() => console.log('redirigir')}>
									Show
								</Show>,
							]}
						>
							<List.Item.Meta
								title={
									<Show
										onClick={() => console.log('redirigir')}
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
