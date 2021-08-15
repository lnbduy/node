const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const beep = () => process.stdout.write("\x07");
const delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
});

Promise.all([
    writeFile('readme.md', 'Hello world'),
    writeFile('readme.txt', 'Hello world'),
    writeFile('readme.json', '{"hello": "world"}')
]).then(() => fs.readdir(__dirname))
.then(console.log);

Promise.race([
    delay(5),
    delay(3),
    delay(2),
]).then(() => fs.readdir(__dirname))
.then(console.log);

