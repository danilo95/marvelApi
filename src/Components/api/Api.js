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

export const getComics = () => {
	let result = url
		.get(`/comics?ts=${ts}&apikey=${marvelApi.publicKey}&hash=${hash}`)
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
		.get(
			`/comics/${id}?ts=${ts}&apikey=${marvelApi.publicKey}&hash=${hash}`
		)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getCharacters = () => {
	let result = url
		.get(`/characters?ts=${ts}&apikey=${marvelApi.publicKey}&hash=${hash}`)
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
		.get(`/stories?ts=${ts}&apikey=${marvelApi.publicKey}&hash=${hash}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};
