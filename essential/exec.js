const cp = require("child_process");

cp.exec("open http://www.linkedin.com/learning");

cp.exec("open -a Terminal .");

cp.exec("ls", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

cp.exec("node readStream", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});