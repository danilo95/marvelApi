import React, { useEffect } from 'react';
import {
	getAllCharacters,
	loadingCharacters,
} from '../../Actions/CharactersActions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import LoadingView from '../loadingView/LoadingView';

import { ContentWrapper } from '../globalStyles/Index';

const Characters = () => {
	const dispatch = useDispatch();
	const { listOfCharacters, loading } = useSelector(
		(state) => state.characters
	);

	useEffect(() => {
		dispatch(getAllCharacters());
		dispatch(loadingCharacters());
	}, []);
	return (
		<ContentWrapper>
			{loading && <LoadingView />}

			{!loading &&
				listOfCharacters?.results?.map((value) => (
					<Card
						key={value.id}
						background={value.thumbnail.path}
						title={value.name}
						extension={value.thumbnail.extension}
						height={'400px'}
					/>
				))}
		</ContentWrapper>
	);
};

export default Characters;
