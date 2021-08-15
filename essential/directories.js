const fs = require("fs");

//fs.renameSync("./assets", "./storage");
fs.readdirSync("./storage").forEach(filname => {
    fs.unlinkSync(`./storage/${filname}`);
});

fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }

    console.log("./storage directory removed");
})
