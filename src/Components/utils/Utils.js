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
