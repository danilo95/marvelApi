import React, { useState, useEffect } from 'react';
import { List, Tag, Button } from 'antd';
import { deleteFavorite } from '../utils/Utils';
import History from '../history/History';
import DefaultImage from '../../Assets/marvelTemplate.jpg';
import { Title, Show } from '../globalStyles/Index';

const FavoriteItems = () => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	const [favoriteList, setFavoriteList] = useState([]);

	useEffect(() => {
		setFavoriteList(favorites);
	}, []);

	const handleDeleteFavorite = (id) => {
		let newFav = deleteFavorite(id);
		deleteFavorite(id);
		setFavoriteList(newFav);
	};

	const handleRedirect = (path, id) => {
		History.push(`/${path}/${id}`);
	};

	return (
		<div>
			<Title>My Favorites from Marvel</Title>
			<List
				itemLayout="vertical"
				size="large"
				dataSource={favoriteList}
				renderItem={(item) => (
					<List.Item
						key={item.title}
						extra={
							<img
								width={272}
								height={300}
								alt="logo"
								src={item.img || DefaultImage}
								onClick={() =>
									handleRedirect(item.type, item.id)
								}
							/>
						}
					>
						<List.Item.Meta
							title={
								<Show
									onClick={() =>
										handleRedirect(item.type, item.id)
									}
								>
									{item.title}
								</Show>
							}
						/>
						<Tag color="blue">{item.type}</Tag>
						<Button
							danger
							onClick={() => {
								handleDeleteFavorite(item.id);
							}}
						>
							Delete
						</Button>
					</List.Item>
				)}
			/>
			,
		</div>
	);
};

export default FavoriteItems;
