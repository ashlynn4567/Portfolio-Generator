const fs = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            // if error, reject Promise and send error to catch method
            if (err) {
                reject(err);
                // return so function does not continue to the resolve method
                return;
            };

            // if ok, resolve promise and send data to .then method
            resolve({
                ok: true,
                message: "HTML File created!"
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/index.html", err => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true,
                message: "Stylesheet created!"
            });
        });
    });
};

module.exports = {writeFile, copyFile};