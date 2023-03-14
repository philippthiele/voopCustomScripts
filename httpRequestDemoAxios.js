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
	return axios.get('https://google.com')
	.then(function (response) {
	  // handle success
	  input.insert(response.data);
	}) .catch(function (error) {
		// handle error
		input.insert(JSON.stringify(error));
	});
}