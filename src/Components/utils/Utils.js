export const generateQueryParams = (obj) => {
	var str = [];
	for (var key in obj)
		if (obj.hasOwnProperty(key)) {
			if (obj[key]) {
				str.push(
					encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
				);
			}
		}
	return str.join('&');
};

export const saveFavorite = (id, title, type, img) => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	favorites = [...favorites, { id, title, type, img }];
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const deleteFavorite = (id) => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	let newFavorites = favorites.filter((value) => value.id !== id);
	localStorage.setItem('favorites', JSON.stringify(newFavorites));
	return newFavorites;
};
