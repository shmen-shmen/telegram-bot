const axios = require("axios");
const MY_TOKEN = "7012762892:AAG7Hk-C6y4nct1AHdPsDCHQexUE7ABbZw0";
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
	return {
		get(method, params) {
			return axios.get(`/${method}`, {
				baseURL: BASE_URL,
				params,
			});
		},
		post(method, data) {
			return axios({
				method: "post",
				baseURL: BASE_URL,
				url: `/${method}`,
				data,
			});
		},
	};
}

module.exports = { axiosInstance: getAxiosInstance() };
