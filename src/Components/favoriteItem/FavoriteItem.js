import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { saveFavorite } from '../utils/Utils';
import { FavoriteContainer } from './Style';

const FavoriteItem = ({ id, title, type, img, text }) => {
	return (
		<div>
			<FavoriteContainer>
				<HeartOutlined
					onClick={() => saveFavorite(id, title, type, img)}
				/>
				{text && (
					<span onClick={() => saveFavorite(id, title, type, img)}>
						Add to favorite
					</span>
				)}
			</FavoriteContainer>
		</div>
	);
};

export default FavoriteItem;
