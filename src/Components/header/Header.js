import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from './../../logo.svg';
import { Navbar, Logo } from './Style';

const Header = ({ menu }) => {
	const [visible, setVisible] = useState(false);
	return (
		<nav className="navbar">
			<Button
				className="menu"
				type="primary"
				icon={<MenuOutlined />}
				onClick={() => setVisible(true)}
			/>
			<Drawer
				title="MarvelApi"
				placement="left"
				onClick={() => setVisible(false)}
				onClose={() => setVisible(false)}
				visible={visible}
			>
				{menu}
			</Drawer>
			<a href="/">
				<Logo src={logo} alt="logo" />
			</a>
		</nav>
	);
};
export default Header;
