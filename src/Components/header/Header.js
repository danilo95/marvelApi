import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import History from '../history/History';
import logo from './../../logo.svg';
import { Logo, logoContainer, Nav } from './Style';

const Header = ({ menu }) => {
	const [visible, setVisible] = useState(false);
	return (
		<Nav>
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
			<span onClick={() => History.push('/')}>
				<Logo src={logo} alt="logo" />
			</span>
		</Nav>
	);
};
export default Header;
