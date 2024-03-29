/**
	{
		"api":1,
		"name":"Demo HTTP Request with Axios",
		"description":"",
		"author":"philippthiele",
		"icon":"collapse",
		"tags":"demo"
	}
**/

const axios = require('axios');

function main(input) {
	return axios.get('https://8.8.8.8/resolve?name=google.com')
	.then(function (response) {
	  // handle success
	  input.insert(JSON.stringify(response.data));
	}) .catch(function (error) {
		// handle error
		input.insert(JSON.stringify(error));
	});
}
