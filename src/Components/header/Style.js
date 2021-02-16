import styled from 'styled-components';
export const Sider = styled.div`
	height: 100vh;
	margin-right: 24px;
`;

export const Navbar = styled.nav`
	background-color: white;
	padding-left: 2rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	@media (min-width: 992px) {
		.menu {
			display: none;
		}
	}
`;

export const Logo = styled.img`
	height: 32px;
	width: 32px;
	margin-left: 1rem;
	cursor: pointer;
`;

export const Nav = styled.nav`
	background: #1890ff;
`;
