const path = require("path");

const dirUpload = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUpload);

const util = require("util");

const v8 = require("v8");

console.log(v8.getHeapStatistics());