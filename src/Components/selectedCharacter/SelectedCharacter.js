import React, { useEffect } from 'react';
import {
	getCharacterById,
	loadingCharacters,
	loadingCharactersComics,
	getCharacterComics,
	loadingCharactersSeries,
	getCharacterSeries,
	loadingCharactersStories,
	getCharacterStories,
} from '../../Actions/CharactersActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import InformationTab from '../informationTab/InformationTab';
import { PageHeader, Image, Row, Button } from 'antd';
import History from '../history/History';
import { Title } from '../globalStyles/Index';

const SelectedCharacter = () => {
	let { id } = useParams();
	const {
		character,
		loading,
		characterComics,
		loadingComics,
		characterSeries,
		loadingSeries,
		characterStories,
		loadingStories,
	} = useSelector((state) => state.characters);
	let { total, offset } = characterComics;
	let { total: totalSeries, offset: offSetSeries } = characterSeries;
	let { total: totalStories, offset: offSetStories } = characterStories;
	let { results } = character;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getCharacterById(id));
		dispatch(loadingCharactersComics());
		dispatch(getCharacterComics(id, 0));
		dispatch(loadingCharactersSeries());
		dispatch(getCharacterSeries(id, 0));
		dispatch(loadingCharactersStories());
		dispatch(getCharacterStories(id, 0));
	}, []);

	const handleRedirect = (path) => {
		History.push(path);
	};

	const Content = ({ children, extraContent }) => (
		<Row>
			<div>{extraContent}</div>
			<div style={{ flex: 1, padding: 10 }}>{children}</div>
		</Row>
	);

	const onLoadMoreComics = () => {
		dispatch(loadingCharactersComics());
		dispatch(getCharacterComics(id, offset + 20));
	};
	const onLoadMoreSeries = () => {
		dispatch(loadingCharactersSeries());
		dispatch(getCharacterSeries(id, offSetSeries + 20));
	};
	const onLoadMoreStories = () => {
		dispatch(loadingCharactersStories());
		dispatch(getCharacterStories(id, offSetStories + 20));
	};

	const loadMoreComics =
		!loadingComics && total > offset + 20 ? (
			<div
				style={{
					textAlign: 'center',
					marginTop: 12,
					height: 32,
					lineHeight: '32px',
				}}
			>
				<Button onClick={onLoadMoreComics}>More Comics</Button>
			</div>
		) : null;

	const loadMoreSeries =
		!loadingSeries && totalSeries > offSetSeries + 20 ? (
			<div
				style={{
					textAlign: 'center',
					marginTop: 12,
					height: 32,
					lineHeight: '32px',
				}}
			>
				<Button onClick={onLoadMoreSeries}>More Series</Button>
			</div>
		) : null;

	const loadMoreStories =
		!loadingStories && totalStories > offSetStories + 20 ? (
			<div
				style={{
					textAlign: 'center',
					marginTop: 12,
					height: 32,
					lineHeight: '32px',
				}}
			>
				<Button onClick={onLoadMoreStories}>More Stories</Button>
			</div>
		) : null;

	return (
		<div>
			{loading && <LoadingView />}
			{!loading && results && (
				<div>
					<PageHeader title={results[0]?.name}>
						<Content
							extraContent={
								<Image
									width={200}
									src={`${results[0]?.thumbnail?.path}.${results[0]?.thumbnail?.extension}`}
								/>
							}
						>
							{results[0]?.description}
						</Content>
					</PageHeader>
					<Title>Information</Title>
					<InformationTab
						characterComics={characterComics?.results}
						loadingComics={loadingComics}
						loadMoreComics={loadMoreComics}
						characterSeries={characterSeries?.results}
						loadingSeries={loadingSeries}
						loadMoreSeries={loadMoreSeries}
						characterStories={characterStories?.results}
						loadingStories={loadingStories}
						loadMoreStories={loadMoreStories}
						handleRedirect={handleRedirect}
					/>
				</div>
			)}
		</div>
	);
};

export default SelectedCharacter;
