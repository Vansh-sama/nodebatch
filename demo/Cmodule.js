const fs = require("fs");

fs.writeFile("demo.txt", "Hello this is Node.js file no. 1", (err) => {
    if (err) throw err;
    console.log("File created successfully");
});