import React, { useEffect } from 'react';
import {
	getComicById,
	loadingComicStories,
	getComicStories,
} from '../../Actions/ComicsActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import History from '../history/History';
import LoadingView from '../loadingView/LoadingView';
import Gallery from '../Gallery/Gallery';
import InformationTab from '../informationTab/InformationTab';
import { PageHeader, Tag, Row, Button } from 'antd';

import { Title } from '../globalStyles/Index';

const SelectedComic = () => {
	let { id } = useParams();
	const { comic, loading, loadingStories, comicStories } = useSelector(
		(state) => state.comics
	);
	let { results } = comic;
	let { total: totalStories, offset: offSetStories } = comicStories;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getComicById(id));
		dispatch(loadingComicStories());
		dispatch(getComicStories(id, 0));
	}, []);

	const Content = ({ children }) => (
		<Row>
			<div style={{ flex: 1 }}>{children}</div>
		</Row>
	);

	const handleRedirect = (path) => {
		History.push(path);
	};

	const onLoadMoreStories = () => {
		dispatch(loadingComicStories());
		dispatch(getComicStories(id, offSetStories + 20));
	};

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
				<Button onClick={onLoadMoreStories}>More Series</Button>
			</div>
		) : null;

	return (
		<div>
			{loading && <LoadingView />}
			{!loading && results && (
				<div>
					<PageHeader
						title={results[0]?.title}
						tags={<Tag color="blue">{results[0]?.format}</Tag>}
					>
						<Content>{results[0]?.description}</Content>
					</PageHeader>
					<Title>Gallery</Title>
					<Gallery images={results[0]?.images} />
					<Title>Information</Title>
					<InformationTab
						characterStories={comicStories?.results}
						loadingStories={loadingStories}
						loadMoreStories={loadMoreStories}
					/>
				</div>
			)}
		</div>
	);
};

export default SelectedComic;
