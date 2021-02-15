import React from 'react';
import { Result } from 'antd';
import { ErrorContainer } from './Style';

const ErrorPage = ({ code, message }) => {
	return (
		<ErrorContainer>
			<Result status={code} title={code} subTitle={message} />
		</ErrorContainer>
	);
};

export default ErrorPage;
