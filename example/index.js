"use strict";

const readFileCache = require("../lib");

// Read the file from the disk
readFileCache("~/.bashrc", (err, content) => {
    console.log(err || content);

    // Read it from the cache
    readFileCache("~/.bashrc", (err, content) => {
        console.log(err || content);

        // And now force reading it from the disk again
        readFileCache("~/.bashrc", true, (err, content) => {
            console.log(err || content);
        });
    });
});

// From the disk
console.log(readFileCache.sync("~/.bashrc"));

// From cache
console.log(readFileCache.sync("~/.bashrc"));

// Force reading from disk
console.log(readFileCache.sync("~/.bashrc", true));
