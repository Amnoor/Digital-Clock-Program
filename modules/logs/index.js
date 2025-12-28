// Digital Clock Program

// modules/logs/index.js

// Debugging flag
const DEBUG = true;

/**
 * Logs a message to the console with a timestamp based on the type.
 * If type is "error", logs an error to the console.
 * If type is "warn", logs a warning to the console.
 * If type is "log" and DEBUG is true, logs to the console.
 * If type is invalid and DEBUG is true, logs a warning about invalid type.
 * If type is unhandled, logs an error to the console.
 * @param {string} type - The type of log message to log (error, warn, log).
 * @param {string} message - The message to log.
 */
export function logDebug(type, message){
    // Get the current timestamp for logging
    const timestamp = new Date().toISOString();

    // Log the message based on the type
    // if type is "error", log an error, even if DEBUG is false
    if(type === "error"){
        console.error(`${timestamp} - ${message}`);
    }
    // else if type is "warn", log a warning, even if DEBUG is false
    else if(type === "warn"){
        console.warn(`${timestamp} - ${message}`);
    }
    // else if DEBUG is false, return nothing and do not log
    else if(!DEBUG){
        return;
    }
    // else if type is "log" and DEBUG is true, log to the console
    else if(type === "log" && DEBUG){
        console.log(`${timestamp} - ${message}`);
    }
    // else if type is invalid and DEBUG is true, log a warning about invalid type
    else if(type !== "log" && type !== "error" && type !== "warn" && DEBUG){
        console.warn(`${timestamp} - Invalid log type specified: ${type}`);
    }
    // else log an error for unhandled log types
    else{
        console.error(`${timestamp} - Unhandled log type: ${type} with message: ${message}`);
    }
}