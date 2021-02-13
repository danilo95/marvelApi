import styled from 'styled-components';

export const CharacterWrapperGallery = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.ant-card {
		margin-bottom: 20px;
		width: 300px;
	}
	@media (max-width: 700px) {
		justify-content: center;
	}
`;

export const CardContainer = styled.div`
	cursor: pointer;
`;

export const EmptyMessage = styled.div`
	width: 100%;
	padding: 16px 24px;
	text-align: center;
`;
