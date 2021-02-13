import axios from 'axios';
import CryptoJS from 'crypto-js';
import { marvelApi } from '../config/Config';

const url = axios.create({
	baseURL: 'http://gateway.marvel.com/v1/public/',
});
let ts = 1;
let hash = CryptoJS.MD5(
	`${ts}${marvelApi.privateKey}${marvelApi.publicKey}`
).toString(CryptoJS.enc.Hex);

let options = `ts=${ts}&apikey=${marvelApi.publicKey}&hash=${hash}`;
let request = '';

export const getComics = (params, offSet) => {
	if (params) {
		request = `?${params}&offset=${offSet}&${options}`;
	} else {
		request = `?offset=${offSet}&${options}`;
	}
	let result = url
		.get(`/comics${request}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getSingleComic = (id) => {
	let result = url
		.get(`/comics/${id}?${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getComicsPerChracter = (id, offSet) => {
	let result = url
		.get(`/characters/${id}/comics?offset=${offSet}&${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getCharacters = (params, offSet) => {
	if (params) {
		request = `?${params}&offset=${offSet}&${options}`;
	} else {
		request = `?offset=${offSet}&${options}`;
	}
	let result = url
		.get(`/characters${request}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getSingleCharacter = (id) => {
	let result = url
		.get(`/characters/${id}?${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getStories = () => {
	let result = url
		.get(`/stories?${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getSingleStorie = (id) => {
	let result = url
		.get(`/stories/${id}?${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};
