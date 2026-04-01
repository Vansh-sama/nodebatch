const fs = require("fs");

fs.appendFile("demo.txt", "\nThis is new line", (err) => {
    if (err) throw err;
    console.log("Data appended");
});