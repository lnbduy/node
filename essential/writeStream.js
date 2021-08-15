const fs = require("fs");

const writeStream = fs.createWriteStream("./storage-files/myFile.txt", "UTF-8");

// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

const readStream = fs.createReadStream("./storage-files/colors.md", "UTF-8");

// readStream.on("data", data => {
//     writeStream.write(data);
// });

process.stdin.pipe(writeStream);

readStream.pipe(writeStream);

