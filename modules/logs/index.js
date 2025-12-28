// Digital Clock Program

// modules/logs/index.js

// Debugging flag
const DEBUG = true;

/**
 * Logs a message to the console based on the type.
 * If type is "log", logs to the console.
 * If type is "error", logs an error to the console.
 * If type is "warn", logs a warning to the console.
 * If the type is invalid, logs a warning about the invalid type.
 * If DEBUG is false, does nothing.
 * @param {string} type - The type of message to log.
 * @param {string} message - The message to log.
 */
export function logDebug(type, message){
    // if DEBUG is false, do nothing
    if(DEBUG === false){
        return;
    }

    // Get the current timestamp for logging
    const timestamp = new Date().toISOString();

    // Log the message based on the type
    switch(type){
        // If type is "log", log to the console, then break
        case "log":
            console.log(`${timestamp} - ${message}`);
            break;
        // If type is "error", log an error to the console, then break
        case "error":
            console.error(`${timestamp} - ${message}`);
            break;
        // If type is "warn", log a warning to the console, then break
        case "warn":
            console.warn(`${timestamp} - ${message}`);
            break;
        // Default case, log a warning about invalid type
        default:
            console.warn(`${timestamp} - Invalid log type specified: ${type}`);
    }
}