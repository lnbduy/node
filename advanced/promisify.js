const { promisify } = require('util');

const delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds is too long`));
    } else {
        setTimeout(() => callback(null, `the ${seconds} second delay is over`), seconds);
    }
}

const promiseDelay = promisify(delay);

promiseDelay(5)
    .then(console.log)
    .catch((error) => console.log(`error: ${error.message}`));