import React from 'react';
import { CardContainer, TitleContainer } from './Style';

const Card = ({ background, title, extension, height, onClick }) => {
	let image = `${background}/standard_fantastic.${extension}`;
	return (
		<CardContainer src={image} customHeight={height} onClick={onClick}>
			<TitleContainer>
				<span>{title}</span>
			</TitleContainer>
		</CardContainer>
	);
};

export default Card;
