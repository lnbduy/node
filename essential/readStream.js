const fs = require("fs");

const readStream = fs.createReadStream("./storage-files/colors.md", "UTF-8");

console.log("type something...");
readStream.on("data", data => {
    console.log(`I read ${data.length-1} characters of text`)
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("finished reading file");
});