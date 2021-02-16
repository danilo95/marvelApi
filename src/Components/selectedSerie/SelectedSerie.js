import React, { useEffect } from 'react';
import { getSerieById, loadingSerie } from '../../Actions/SeriesActions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import ErrorPage from '../errorPage/ErrorPage';
import Writers from '../writers/Writers';
import { useParams } from 'react-router-dom';
import { PageHeader } from 'antd';
import { Title, Content } from '../globalStyles/Index';

const SelectedSerie = () => {
	let { id } = useParams();
	const dispatch = useDispatch();
	const { serie, loading, error } = useSelector((state) => state.series);

	useEffect(() => {
		dispatch(loadingSerie());
		dispatch(getSerieById(id));
	}, []);
	return (
		<div>
			<Title>Serie</Title>
			{loading && <LoadingView />}
			{error.code && (
				<ErrorPage code={error.code} message={error.message} />
			)}
			{!loading && serie?.results && (
				<PageHeader title={serie?.results[0]?.title}>
					<FavoriteItem
						id={serie?.results[0]?.id}
						title={serie?.results[0]?.title}
						type={'serie'}
						img={null}
						text={true}
					/>
					<Title>Writers</Title>
					<Writers writers={serie?.results[0]?.creators?.items} />
					<Content>{serie?.results[0]?.description}</Content>
				</PageHeader>
			)}
		</div>
	);
};

export default SelectedSerie;
