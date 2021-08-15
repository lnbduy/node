const fs = require("fs");

const text = fs.readFileSync("./lib/collectAnswers.js", "UTF-8");

console.log(text);

fs.readFile("./lib/collectAnswers.js", "UTF-8", (err, text) => {
    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file content read");
    console.log(text);
})