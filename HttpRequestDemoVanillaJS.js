/**
	{
		"api":1,
		"name":"Demo HTTP Request with Vanilla JS",
		"description":"",
		"author":"philippthiele",
		"icon":"collapse",
		"tags":"test"
	}
**/

const https = require('https');

function main(input) {
	return new Promise((resolve) => {
		const options = {
			hostname: '8.8.8.8',
			port: 443,
			path: '/resolve?name=google.com',
			method: 'GET',
		};
		
		const req = https.request(options, res => {
			input.insert(`statusCode: ${res.statusCode}\n`);
		
			res.on('data', d => {
				input.insert(d);
			});

			res.on('end', function () { 
				resolve();
			});
		});
		
		req.on('error', error => {
			input.insert(error);
			resolve();
		});
		
		req.end();

		input.insert("request was send\n");
	})
}