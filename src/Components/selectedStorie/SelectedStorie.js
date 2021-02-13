import React, { useEffect } from 'react';
import {
	getStorie,
	loadingCharacters,
	loadingComicsFromStorie,
	getComicsFromStorie,
} from '../../Actions/StoriesActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import InformationTab from '../informationTab/InformationTab';
import History from '../history/History';
import { PageHeader, Tag, Row, Button } from 'antd';
import { Title } from '../globalStyles/Index';

const SelectedStorie = () => {
	let { id } = useParams();
	const { storie, loading, comics, loadingComics } = useSelector(
		(state) => state.stories
	);
	let { results } = storie;
	let { total, offset } = comics;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadingCharacters());
		dispatch(getStorie(id));
		dispatch(loadingComicsFromStorie());
		dispatch(getComicsFromStorie(id, 0));
	}, []);

	const Content = ({ children }) => (
		<Row>
			<div style={{ flex: 1, padding: 10 }}>{children}</div>
		</Row>
	);

	const handleRedirect = (path) => {
		History.push(path);
	};

	const onLoadMoreComics = () => {
		dispatch(loadingComicsFromStorie());
		dispatch(getComicsFromStorie(id, offset + 20));
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

	return (
		<div>
			{loading && <LoadingView />}
			{!loading && results && (
				<div>
					<PageHeader title={results[0]?.title}>
						<Content>{results[0]?.description}</Content>
					</PageHeader>
					<Title>Information</Title>
					<InformationTab
						characterComics={comics?.results}
						loadingComics={loadingComics}
						loadMoreComics={loadMoreComics}
						handleRedirect={handleRedirect}
					/>
				</div>
			)}
		</div>
	);
};

export default SelectedStorie;
