import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import TopicMenu from '../header/TopicMenu';
import NavBar from '../header/Header';
import History from '../history/History';
import { LayoutWrapper, Content } from '../globalStyles/Index';
import { Layout } from 'antd';
const { Footer } = Layout;

const PublicRoute = ({ component: Component, path }) => {
	const topics = ['Comics', 'Characters', 'Stories', 'Favorites'];
	const [contentIndex, setContentIndex] = useState(0);
	const [selectedKey, setSelectedKey] = useState('0');

	const changeSelectedKey = (event) => {
		const key = event.key;
		setSelectedKey(key);
		setContentIndex(+key);
		History.push(`/${topics[key]}`);
	};

	const Menu = (
		<TopicMenu
			topics={topics}
			selectedKey={selectedKey}
			changeSelectedKey={changeSelectedKey}
		/>
	);
	return (
		<Route
			path={path}
			render={(props) => {
				return (
					<div>
						<NavBar menu={Menu} />
						<LayoutWrapper>
							<Content>
								<Component {...props} />
							</Content>
						</LayoutWrapper>
						<Footer style={{ textAlign: 'center' }}>
							©2021 Created by Danilo Rivera
						</Footer>
					</div>
				);
			}}
		/>
	);
};

export default PublicRoute;
