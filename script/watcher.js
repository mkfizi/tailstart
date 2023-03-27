// This is the code to watch for changes in Tailstart files.
"use strict";

const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

// The root directory to watch for changes.
const root = __dirname + "/../";

// Specify files and subdirectories to exclude from the archive.
const exclude = [
	".git",
    "script",
	".DS_Store",
	"*/.DS_Store",
    "node_modules",
	"tailstart.zip",
];

/**
 * Execute 'node archiver.js' command.
 */
const runArchiverJs = () => {
	exec("node archiver.js", (error) => {
		// Log any errors that occurred during the command execution.
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
	});
}

// Main function to watch files.
(() => {
	runArchiverJs();
	
	// Watch for changes in the root directory, including subdirectories.
	fs.watch(root, {recursive: true}, (eventType, filename) => {
		// Get the full path of the changed file or directory
		const filePath = path.join(root, filename);

		// Check if the changed file or directory is excluded
		if (exclude.includes(filename) || exclude.includes(path.dirname(filename)) || filePath.includes(path.join(root, '.git'))) return;
		
		console.log(`${eventType}: ${filename}`);
		
		// Execute the 'node zip.js' command.
		runArchiverJs();
	});
	
	// Log a message indicating that the watcher has started.
	console.log(`Watching ${root} for changes...`);
})();
