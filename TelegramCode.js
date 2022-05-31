/**
	{
		"api":1,
		"name":"Telegram Codeblock",
		"description":"adds code block sign around selection",
		"author":"tietze111",
		"icon":"collapse",
		"tags":"tele"
	}
**/

function main(state) {
	state.text = '\n```\n' + state.text + '\n```\n';
}