// Digital Clock Program

// index.js

// Import the log function from the logs module
import { log } from "./modules/logs/index.js";
// Import the loadSavedMode and listenForModeChanges functions from the preferences module
import { loadSavedMode, listenForModeChanges } from "./modules/preferences/index.js";

// Log initialization message
log("info", "Initializing Digital Clock Program...");

// logging debug message about checking for saved clock mode
log("debug", "Checking for saved clock mode in client-side storage...");
// Load the saved clock mode from client-side storage
loadSavedMode();

// logging debug message about setting up event listener for format toggle input
log("debug", "Setting up event listener for format toggle input...");
// Listen for changes to the format toggle input
listenForModeChanges();