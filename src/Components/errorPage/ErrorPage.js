import React from 'react';
import { Result } from 'antd';

const ErrorPage = ({ code, message }) => {
	return <Result status={code} title={code} subTitle={message} />;
};

export default ErrorPage;
