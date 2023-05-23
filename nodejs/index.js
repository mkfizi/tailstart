"use strict";

// Import the necessary modules
const fs = require("fs");
const archiver = require("archiver");
const glob = require("glob");
const path = require("path");
const exec = require("child_process").exec;

// Define the root and output directories
const root = __dirname + "/../";
const outputDir = root;
const archiveFile = "tailstart.zip";

// Define the files and directories to exclude
const exclude = [
    ".git/**",
    "nodejs/**",
    ".DS_Store",
    "*/.DS_Store",
    "node_modules/**",
    archiveFile,
];

// Function to archive files
const build = () => {
    const output = fs.createWriteStream(outputDir + "/" + archiveFile);

    const archive = archiver("zip", {
        zlib: { level: 9 }
    });

    archive.pipe(output);

    const files = glob.sync("**/*", {
        cwd: root,
        ignore: exclude,
        dot: true,
    });

    let outputFiles = {}

    // Add each file to the outputFiles object
    files.forEach(file => {
        const filePath = `${root}/${file}`;
        if (!fs.statSync(filePath).isDirectory()) outputFiles[filePath] = `${file}`;
    });

    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    // Add each file in outputFiles to the archive
    for (const [path, file] of Object.entries(outputFiles)) archive.file(path, { name: file });

    archive.finalize();
};

// Function to watch for changes in files
const watch = () => {
    build();

    // Watch for changes in the root directory and its subdirectories
    fs.watch(root, {recursive: true}, (eventType, filename) => {
        const filePath = path.join(root, filename);
        if (exclude.includes(filename) || exclude.includes(path.dirname(filename)) || filePath.includes(path.join(root, '.git'))) return;

        console.log(`${eventType}: ${filename}`);
        build();
    });

    console.log(`Watching ${root} for changes...`);
};

// Check the command line arguments to determine whether to build or watch
switch (process.argv[2]) {
case 'build':
    build();
    break;
case 'watch':
    watch();
    break;
default:
    console.log('Invalid command. Please use "npm run build" or "npm run watch".');
}
