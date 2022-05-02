const _ = require('lodash');

items = [1, [2, [3, [4]]]];

const newItems = _.flatMapDeep(items);

console.log(newItems);
