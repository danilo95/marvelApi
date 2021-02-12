import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 300px;
	height: ${(props) => (props.customHeight ? props.customHeight : '300px')};
	-webkit-box-shadow: 14px 10px 37px -13px rgba(0, 0, 0, 0.56);
	-moz-box-shadow: 14px 10px 37px -13px rgba(0, 0, 0, 0.56);
	box-shadow: 14px 10px 37px -13px rgba(0, 0, 0, 0.56);
	margin-left: 10px;
	border-radius: 5%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(${(props) => (props.src ? props.src : '')});
	margin: 10px;
	transition: transform 0.2s;
	&:hover {
		transform: scale(1.2);
		cursor: pointer;
	}
`;

export const TitleContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding-bottom: 20px;
	span {
		font-weight: bold;
		color: white;
		font-size: 16px;
		text-align: center;
		text-shadow: 2px 2px #ff0000;
	}
`;
