const fs = require("fs");

console.log("started reading files sync");
const files = fs.readdirSync("./lib");
console.log(files);
console.log("complete reading files sync");

console.log("started reading files async");
fs.readdir("./lib", (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
    console.log("complete reading files async");
});
