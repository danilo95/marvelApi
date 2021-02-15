import React, { useEffect } from 'react';
import {
	getStorie,
	loadingCharacters,
	loadingComicsFromStorie,
	getComicsFromStorie,
	loadingSeriesFromStorie,
	getSeriesFromStorie,
	loadingStorieCharacters,
	getStorieCharacters,
} from '../../Actions/StoriesActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import ErrorPage from '../errorPage/ErrorPage';
import InformationTab from '../informationTab/InformationTab';
import CharactersGallery from '../charactersGallery/CharactersGallery';
import Writers from '../writers/Writers';
import History from '../history/History';
import { PageHeader, Row, Button } from 'antd';
import { Title, LoadMoreBtn, RowContent } from '../globalStyles/Index';

const SelectedStorie = () => {
	let { id } = useParams();
	const {
		storie,
		loading,
		comics,
		loadingComics,
		series,
		loadingSeries,
		error,
		characters,
		loadingCharactersList,
	} = useSelector((state) => state.stories);
	let { results } = storie;
	let { total, offset } = comics;
	let { total: totalSeries, offset: offSetSeries } = series;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getStorie(id));
		dispatch(loadingComicsFromStorie());
		dispatch(getComicsFromStorie(id, 0));
		dispatch(loadingSeriesFromStorie());
		dispatch(getSeriesFromStorie(id, 0));
		dispatch(loadingStorieCharacters());
		dispatch(getStorieCharacters(id, 0));
	}, []);

	const Content = ({ children }) => (
		<Row>
			<RowContent>{children}</RowContent>
		</Row>
	);

	const handleRedirect = (path) => {
		History.push(path);
	};

	const onLoadMoreComics = () => {
		dispatch(loadingComicsFromStorie());
		dispatch(getComicsFromStorie(id, offset + 20));
	};
	const onLoadMoreSeries = () => {
		dispatch(loadingSeriesFromStorie());
		dispatch(getSeriesFromStorie(id, offset + 20));
	};

	const loadMoreComics =
		!loadingComics && total > offset + 20 ? (
			<LoadMoreBtn>
				<Button onClick={onLoadMoreComics}>More Comics</Button>
			</LoadMoreBtn>
		) : null;

	const loadMoreSeries =
		!loadingSeries && totalSeries > offSetSeries + 20 ? (
			<LoadMoreBtn>
				<Button onClick={onLoadMoreSeries}>More Series</Button>
			</LoadMoreBtn>
		) : null;
	return (
		<div>
			{loading && <LoadingView />}
			{error.code && (
				<ErrorPage code={error.code} message={error.message} />
			)}
			{!loading && results && (
				<div>
					<PageHeader title={results[0]?.title}>
						<FavoriteItem
							id={results[0]?.id}
							title={results[0]?.title}
							type={'storie'}
							img={null}
							text={true}
						/>
						<Content>{results[0]?.description}</Content>
						<Writers writers={results[0]?.creators?.items} />
						<Title>Characters</Title>
						<CharactersGallery
							loading={loadingCharactersList}
							gallery={characters}
							handleRedirect={handleRedirect}
						/>
					</PageHeader>
					<Title>Information</Title>
					<InformationTab
						characterComics={comics?.results}
						loadingComics={loadingComics}
						loadMoreComics={loadMoreComics}
						handleRedirect={handleRedirect}
						characterSeries={series?.results}
						loadingSeries={loadingSeries}
						loadMoreSeries={loadMoreSeries}
					/>
				</div>
			)}
		</div>
	);
};

export default SelectedStorie;
