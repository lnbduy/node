const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const beep = () => process.stdout.write("\x07");
const delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
});

const doStuffSequentially = async () => {
    console.log('starting');
    await delay(1);
    console.log('waiting');
    await delay(2);
    try {
         await writeFile('file.txt', 'Sample File...');
        beep();
    } catch (error) {
        console.error(error);
    }
    console.log('file.txt created');
    await delay(2);
    await unlink('file.txt');
    beep();
    console.log('file txt removed');

}
    
doStuffSequentially();

