import React, { useEffect } from 'react';
import { getAllComics, loadingComics } from '../../Actions/ComicsActions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import LoadingView from '../loadingView/LoadingView';
import { ContentWrapper } from '../globalStyles/Index';

const Comics = () => {
	const dispatch = useDispatch();
	const { listOfComics, loading } = useSelector((state) => state.comics);

	useEffect(() => {
		dispatch(loadingComics());
		dispatch(getAllComics());
	}, []);

	return (
		<ContentWrapper>
			{loading && <LoadingView />}
			{!loading &&
				listOfComics?.results?.map((value) => (
					<Card
						key={value.id}
						background={value.thumbnail.path}
						title={value.title}
						extension={value.thumbnail.extension}
						height={'400px'}
					/>
				))}
		</ContentWrapper>
	);
};

export default Comics;
