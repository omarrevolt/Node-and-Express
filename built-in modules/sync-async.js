const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const text = readFileSync('./sub/text.txt', 'utf8');
const text2 = readFileSync('./sub/text2.txt', 'utf8');

writeFileSync('./sub/result-sync.txt', `Content of text.txt: ${text}`);
writeFileSync('./sub/result-sync.txt', `Content of text2.txt: ${text2}`, {
	flag: 'a',
});

console.log('done with the task');
console.log('starting the next one');
