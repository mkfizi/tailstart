
"use strict";
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

// The root directory to watch for changes.
const root = __dirname + '/../';

// The list of excluded subdirectories or files.
const exclude = ['script', 'tailstart.zip'];

// Main
(function() {
	runArchiverJs();
	
	// Watch for changes in the root directory, including subdirectories.
	fs.watch(root, {recursive: true}, (eventType, filename) => {
		// Check if the changed file or directory is excluded
		if (exclude.includes(filename) || exclude.includes(path.dirname(filename))) return;
		
		console.log(`${eventType}: ${filename}`);
		
		// Execute the 'node zip.js' command.
		runArchiverJs();
	});
	
	// Log a message indicating that the watcher has started.
	console.log(`Watching ${root} for changes...`);
})();

/**
 * Execute the 'node zip.js' command.
 */
function runArchiverJs() {
	exec('node archiver.js', (error) => {
		// Log any errors that occurred during the command execution.
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
	});
}
