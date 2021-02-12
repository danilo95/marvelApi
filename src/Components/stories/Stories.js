import React, { useEffect } from 'react';
import { getAllStories, loadingCharacters } from '../../Actions/StoriesActions';
import { useDispatch, useSelector } from 'react-redux';
import { List, Skeleton } from 'antd';

import { ContentWrapper } from '../globalStyles/Index';

const Stories = () => {
	const dispatch = useDispatch();
	const { listOfStories, loading } = useSelector((state) => state.stories);

	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getAllStories());
	}, []);
	return (
		<ContentWrapper>
			<List
				loading={loading}
				style={{ width: '1000%' }}
				itemLayout="horizontal"
				//loadMore={loadMore}
				dataSource={listOfStories?.results}
				renderItem={(item) => (
					<List.Item
						actions={[
							<a key="list-loadmore-edit">show</a>,
							<a key="list-loadmore-more">save</a>,
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
