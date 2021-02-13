import React, { useEffect } from 'react';
import { getAllComics, loadingComics } from '../../Actions/ComicsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from 'antd';
import Card from '../card/Card';
import History from '../history/History';
import LoadingView from '../loadingView/LoadingView';
import ComicsFilters from '../comicsFilters/ComicsFilters';
import { ContentWrapper } from '../globalStyles/Index';

const Comics = () => {
	const dispatch = useDispatch();
	const { listOfComics, loading } = useSelector((state) => state.comics);

	useEffect(() => {
		dispatch(loadingComics());
		dispatch(getAllComics());
	}, []);

	const handleOnClick = (id) => {
		History.push(`comic/${id}`);
	};

	return (
		<ContentWrapper>
			<ComicsFilters />
			{loading && <LoadingView />}
			{listOfComics?.results?.length === 0 && <Empty />}
			{!loading &&
				listOfComics?.results?.length > 0 &&
				listOfComics?.results?.map((value) => (
					<Card
						key={value.id}
						background={value.thumbnail.path}
						title={value.title}
						extension={value.thumbnail.extension}
						onClick={() => handleOnClick(value.id)}
						height={'400px'}
					/>
				))}
		</ContentWrapper>
	);
};

export default Comics;
