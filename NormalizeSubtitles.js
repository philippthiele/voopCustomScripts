/**
	{
		"api":1,
		"name":"Normalize Subtitles",
		"description":"normalizes subtitles for SSP narration",
		"author":"tietze111",
		"icon":"collapse",
		"tags":"narration"
	}
**/

function main(state) {
	let narrations = JSON.parse(state.fullText);
	for (let key in narrations) {
		let narration = narrations[key];
		if (Array.isArray(narration)) {
			narration.forEach(narrationOption => {
				narrationOption = normalizeNarration(narrationOption);
			});
		} else {
			narration = normalizeNarration(narration);
		}
	}
	state.fullText = JSON.stringify(narrations);
}

function normalizeNarration(narration){
	const startTimeInMs = timestampToMs(narration.subtitles[0].startTime);
	for (let i = 0; i < narration.subtitles.length; i++) {
		const subtitle = narration.subtitles[i];
		subtitle.id = i + "";
		subtitle.startTime = msToTimestamp(timestampToMs(subtitle.startTime) - startTimeInMs);
		subtitle.endTime = msToTimestamp(timestampToMs(subtitle.endTime) - startTimeInMs);
	}
}

function timestampToMs(timespan){
	let time = timespan.split(/:|,/);
	let ms = 0;
	ms += parseInt(time[0]) * 3600000;
	ms += parseInt(time[1]) * 60000;
	ms += parseInt(time[2]) * 1000;
	ms += parseInt(time[3]);
	return ms;
}

function msToTimestamp(ms){
	let hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
	let minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
	let seconds = String(Math.floor(((ms % 3600000) % 60000) / 1000)).padStart(2, '0');
	let milliseconds = String(Math.floor(((ms % 3600000) % 60000) % 1000)).padStart(3, '0');
	return hours + ":" + minutes + ":" + seconds + "," + milliseconds;
}