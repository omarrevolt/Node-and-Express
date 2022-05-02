const { readFileSync, writeFileSync, appendFileSync } = require('fs');

const text = readFileSync('./sub/text.txt', 'utf8');
const text2 = readFileSync('./sub/text2.txt', 'utf8');
writeFileSync('./sub/result-sync.txt', `Content of text.txt: ${text}`);
// appendFileSync('./sub/result-sync.txt', `\nContent of text2.txt: ${text2}`);
writeFileSync('./sub/result-sync.txt', `Content of text.txt: ${text}`, {
	flag: 'a',
});
