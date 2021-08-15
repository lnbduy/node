const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);
console.log(process.id);
console.log(process.versions.node);
console.log(process.argv);