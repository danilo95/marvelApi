import React, { useEffect } from 'react';
import { getAllComics, loadingComics } from '../../Actions/ComicsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Pagination } from 'antd';
import Card from '../card/Card';
import History from '../history/History';
import LoadingView from '../loadingView/LoadingView';
import ComicsFilters from '../comicsFilters/ComicsFilters';
import { ContentWrapper, Footer } from '../globalStyles/Index';

const Comics = () => {
	const dispatch = useDispatch();
	const { listOfComics, loading } = useSelector((state) => state.comics);
	const { total, count, offset } = listOfComics;

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
		dispatch(getAllComics(null, newOffset));
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

			<Footer>
				<Pagination
					defaultCurrent={1}
					total={total || 0 / 20}
					simple={true}
					onChange={handlePagination}
				/>
			</Footer>
		</ContentWrapper>
	);
};

export default Comics;
