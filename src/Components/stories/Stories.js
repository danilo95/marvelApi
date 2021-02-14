import React, { useEffect } from 'react';
import { getAllStories, loadingCharacters } from '../../Actions/StoriesActions';
import { useDispatch, useSelector } from 'react-redux';
import History from '../history/History';
import { List, Skeleton } from 'antd';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import { Title, ContentWrapper, Show } from '../globalStyles/Index';

const handleDetails = (id) => {
	History.push(`/storie/${id}`);
};

const Stories = () => {
	const dispatch = useDispatch();
	const { listOfStories, loading } = useSelector((state) => state.stories);

	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getAllStories());
	}, []);
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
		</ContentWrapper>
	);
};

export default Stories;
