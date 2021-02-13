import React, { useEffect, useState } from 'react';
import {
	getAllCharacters,
	loadingCharacters,
} from '../../Actions/CharactersActions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { Empty, Pagination } from 'antd';
import LoadingView from '../loadingView/LoadingView';
import History from '../history/History';
import CharactersFilters from '../charactersFilters/CharactersFilters';
import { generateQueryParams } from '../utils/Utils';

import { ContentWrapper, Footer } from '../globalStyles/Index';

const Characters = () => {
	const [filters, setFilters] = useState({
		nameStartsWith: '',
		orderBy: '',
	});
	const dispatch = useDispatch();
	const { listOfCharacters, loading } = useSelector(
		(state) => state.characters
	);
	const { total, count } = listOfCharacters;

	useEffect(() => {
		dispatch(getAllCharacters());
		dispatch(loadingCharacters());
	}, []);

	const handlePagination = (page) => {
		page = page - 1;
		let newOffset = count * page;
		dispatch(loadingCharacters());
		dispatch(getAllCharacters(generateQueryParams(filters), newOffset));
	};

	const handleOnClick = (id) => {
		History.push(`character/${id}`);
	};

	return (
		<ContentWrapper>
			<CharactersFilters filters={filters} setFilters={setFilters} />
			{loading && <LoadingView />}
			{listOfCharacters?.results?.length === 0 && <Empty />}
			{!loading &&
				listOfCharacters?.results?.map((value) => (
					<Card
						key={value.id}
						background={value.thumbnail.path}
						title={value.name}
						extension={value.thumbnail.extension}
						onClick={() => handleOnClick(value.id)}
						height={'400px'}
					/>
				))}
			{listOfCharacters?.results?.length > 0 && (
				<Footer>
					<Pagination
						defaultCurrent={1}
						total={total || 0 / 2}
						simple={true}
						onChange={handlePagination}
						defaultPageSize={20}
					/>
				</Footer>
			)}
		</ContentWrapper>
	);
};

export default Characters;
