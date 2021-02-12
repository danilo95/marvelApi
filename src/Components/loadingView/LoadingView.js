import React from 'react';
import { phrases } from './Phrases';
import { Spin } from 'antd';
import { LoadingContainer } from './Style';

const LoadingView = () => {
	let index = Math.floor(Math.random() * 4);

	return (
		<LoadingContainer>
			<div>
				<Spin /> Loading...
			</div>
			<br />
			<span>{phrases[index].message}</span>
		</LoadingContainer>
	);
};

export default LoadingView;
