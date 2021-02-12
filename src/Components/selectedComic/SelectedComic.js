import React, { useEffect } from 'react';
import { getComicById } from '../../Actions/ComicsActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../loadingView/LoadingView';
import Gallery from '../Gallery/Gallery';
import { PageHeader, Tag, Row } from 'antd';

import { Title } from '../globalStyles/Index';

const SelectedComic = () => {
	let { id } = useParams();
	const { comic, loading } = useSelector((state) => state.comics);
	let { results } = comic;
	console.log(results);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getComicById(id));
	}, []);

	const Content = ({ children }) => (
		<Row>
			<div style={{ flex: 1 }}>{children}</div>
		</Row>
	);

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
				</div>
			)}
		</div>
	);
};

export default SelectedComic;
