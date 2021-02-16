import React, { useEffect, useState, lazy, Suspense } from 'react';
import { getAllComics, loadingComics } from '../../Actions/ComicsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Pagination } from 'antd';
import History from '../history/History';
import LoadingView from '../loadingView/LoadingView';
import ErrorPage from '../errorPage/ErrorPage';

import { generateQueryParams } from '../utils/Utils';

import { ContentWrapper, Footer } from '../globalStyles/Index';

const Comics = () => {
	const Card = lazy(() => import('../card/Card'));
	const ComicsFilters = lazy(() => import('../comicsFilters/ComicsFilters'));

	const [filters, setFilters] = useState({
		format: '',
		titleStartsWith: '',
		orderBy: '',
		issueNumber: '',
	});
	const dispatch = useDispatch();
	const { listOfComics, loading, error } = useSelector(
		(state) => state.comics
	);
	const { total, count } = listOfComics;

	useEffect(() => {
		dispatch(loadingComics());
		dispatch(getAllComics());
	}, []);

	const handleOnClick = (id) => {
		History.push(`comic/${id}`);
	};
	const handlePagination = (page) => {
		page = page - 1;
		let newOffset = count * page;
		dispatch(loadingComics());
		dispatch(getAllComics(generateQueryParams(filters), newOffset));
	};
	const renderLoader = () => <LoadingView />;

	return (
		<ContentWrapper>
			<Suspense fallback={renderLoader()}>
				<ComicsFilters filters={filters} setFilters={setFilters} />
				{loading && <LoadingView />}
				{listOfComics?.results?.length === 0 && <Empty />}
				{error.code && (
					<ErrorPage code={error.code} message={error.message} />
				)}
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
				{listOfComics?.results?.length > 0 && (
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
			</Suspense>
		</ContentWrapper>
	);
};

export default Comics;
