const fs = require("fs");

fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});