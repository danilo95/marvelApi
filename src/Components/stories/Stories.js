import React, { useEffect } from 'react';
import { getAllStories, loadingCharacters } from '../../Actions/StoriesActions';
import { useDispatch, useSelector } from 'react-redux';
import History from '../history/History';

import FavoriteItem from '../favoriteItem/FavoriteItem';
import { List, Skeleton, Pagination } from 'antd';
import { Title, ContentWrapper, Show, Footer } from '../globalStyles/Index';

const handleDetails = (id) => {
	History.push(`/storie/${id}`);
};

const Stories = () => {
	const dispatch = useDispatch();
	const { listOfStories, loading } = useSelector((state) => state.stories);
	const { total, count } = listOfStories;

	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getAllStories(0));
	}, []);

	const handlePagination = (page) => {
		page = page - 1;
		let newOffset = count * page;
		dispatch(loadingCharacters());
		dispatch(getAllStories(newOffset));
	};
	return (
		<ContentWrapper>
			<Title>Stories</Title>
			<List
				loading={loading}
				style={{ width: '1000%' }}
				itemLayout="horizontal"
				//loadMore={loadMore}
				dataSource={listOfStories?.results}
				renderItem={(item) => (
					<List.Item
						actions={[
							<Show onClick={() => handleDetails(item.id)}>
								show
							</Show>,
							<FavoriteItem
								id={item.id}
								title={item.title}
								type={'storie'}
								img={null}
							/>,
						]}
					>
						<Skeleton
							avatar
							title={false}
							loading={item.loading}
							active
						>
							<List.Item.Meta title={<span>{item.title}</span>} />
						</Skeleton>
					</List.Item>
				)}
			/>
			{listOfStories?.results?.length > 0 && (
				<Footer>
					<Pagination
						defaultCurrent={1}
						total={total || 0 / 20}
						simple={true}
						onChange={handlePagination}
						defaultPageSize={20}
					/>
				</Footer>
			)}
		</ContentWrapper>
	);
};

export default Stories;
