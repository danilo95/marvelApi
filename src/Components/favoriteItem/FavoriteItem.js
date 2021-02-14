import React, { useState, useEffect } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { saveFavorite, deleteFavorite } from '../utils/Utils';
import { FavoriteContainer } from './Style';

const FavoriteItem = ({ id, title, type, img, text }) => {
	const [selected, setSelected] = useState(false);
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

	useEffect(() => {
		let flag = favorites.some((i) => i.id === id);
		setSelected(flag);
	}, []);

	const handleFavorite = () => {
		setSelected(true);
		saveFavorite(id, title, type, img);
	};

	const handleDeleteFavorite = () => {
		setSelected(false);
		deleteFavorite(id);
	};

	return (
		<div>
			{selected ? (
				<FavoriteContainer>
					<HeartFilled onClick={() => handleDeleteFavorite()} />
				</FavoriteContainer>
			) : (
				<FavoriteContainer>
					<HeartOutlined onClick={() => handleFavorite()} />
					{text && (
						<span onClick={() => handleFavorite()}>
							Add to favorite
						</span>
					)}
				</FavoriteContainer>
			)}
		</div>
	);
};

export default FavoriteItem;
