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
			console.log(error.response);
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
			return hadleError(error.response);
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

export const getSeriesPerChracter = (id, offSet) => {
	let result = url
		.get(`/characters/${id}/series?offset=${offSet}&${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getStoriesPerComic = (id, offSet) => {
	let result = url
		.get(`/comics/${id}/stories?offset=${offSet}&${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getCharactersPerComic = (id) => {
	let result = url
		.get(`/comics/${id}/characters?${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getStoriesPerChracter = (id, offSet) => {
	let result = url
		.get(`/characters/${id}/stories?offset=${offSet}&${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getComicsPerStory = (id, offSet) => {
	let result = url
		.get(`/stories/${id}/comics?offset=${offSet}&${options}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});

	return result;
};

export const getSeriessPerStory = (id, offSet) => {
	let result = url
		.get(`/stories/${id}/series?offset=${offSet}&${options}`)
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
			return hadleError(error.response);
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

const hadleError = (httpRequest) => {
	let { status } = httpRequest;
	let error = {};
	let message = '';
	switch (status) {
		case 404:
			message =
				'Oops, the resource you were looking for was not finding.';
			break;
		case 401:
			message =
				'You do not have the proper permissions to make this request';
			break;
		case 500:
			message =
				'something happened unexpectedly, this is not your fault.please reload the page';
			break;
		default:
			message =
				'something goes wrong, please reload the page and try again';
			break;
	}
	error = {
		error: {
			message,
			code: status,
		},
	};
	return error;
};
