import styled, { css } from 'styled-components';

const displayFilters = ({ activeFilter }) => {
	if (activeFilter) {
		return css`
			max-height: 600px;
			transition: max-height 0.25s ease-in;
		`;
	}
};

export const FilterContainer = styled.div`
	width: 100%;
	padding: 20px;
`;

export const FiltersWrapper = styled.div`
	padding: 20px;
	background: rgba(223, 79, 70, 0.05);
	color: #322665;
	transition: max-height 0.15s ease-out;
	overflow: hidden;
	max-height: 0;
	min-height: 45px;
	width: 100%;
	${displayFilters};
`;

export const IconContainer = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

export const FilterOptions = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	div {
		padding: 5px;
	}
`;
