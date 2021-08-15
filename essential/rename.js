const fs = require("fs");

fs.renameSync("./storage-files/color.json", "./storage-files/colors.json");

fs.rename("./storage-files/note.md", "./assets/note.md", err => {
    if (err) {
        throw err;
    }
});


setTimeout(() => {
    fs.unlinkSync("./assets/note.md");
}, 4000);

