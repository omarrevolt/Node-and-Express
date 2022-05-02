const { omar, reda } = require("./3-modules-names");
const sayHi = require("./3-modules-func");
const data = require("./3-modules-data");

console.log(data.items.map((i) => i.toUpperCase()));
sayHi(omar);
sayHi(reda);
sayHi("Mohammad");
