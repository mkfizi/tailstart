// This is the code to archive Tailstart files.
"use strict";

const fs = require("fs");
const archiver = require("archiver");
const glob = require("glob");

// Define root path and output zip directory.
const root = __dirname + "/../";
const outputDir = root;

// Specify files and subdirectories to exclude from the archive.
const exclude = [
	".git",
    "script",
	".DS_Store",
	"*/.DS_Store",
    "node_modules",
	"tailstart.zip",
];

// Main function to create archive.
(function() {
    // Create file stream for archive output.
    const output = fs.createWriteStream(outputDir + "/tailstart.zip");

    // Create an archiver object.
    const archive = archiver("zip", {
        zlib: { level: 9 } // Set the compression level.
    });
    
    // Pipe archive data to the file.
    archive.pipe(output);

    // Get list of files to archive.
    const files = glob.sync("**/*", {
        cwd: root,
        ignore: exclude,
        dot: true,
    });

    // Zip output files.
    let outputFiles = {}

    // Insert each files into "outputFiles" object.
    files.forEach(function(file) { 
        const filePath = `${root}/${file}`;

        // Proceed loop if file is not a directory.
        if (!fs.statSync(filePath).isDirectory()) {
            outputFiles[filePath] = `${file}`;
        }
    });

    // Create output zip directory if its not exist.
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }
    
    // Archive files from "outputFiles" object.
    for (const [path, file] of Object.entries(outputFiles)) {
        archive.file(path, { name: file });
    }
    // Finalize the archive (end the stream).
    archive.finalize();
})();