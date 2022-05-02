const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./sub/text.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile('./sub/text2.txt', 'utf-8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		writeFile(
			'./sub/result-asynced.txt',
			`the Result is: ${first} and ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('DOne with the task');
			}
		);
	});
});

console.log('starting next task'); // Will be print out before previous task is done
