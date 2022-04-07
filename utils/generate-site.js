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
                message: "File created!"
            });
        });
    });
};