// Digital Clock Program

// index.js

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
function logDebug(type, message){
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

/**
 * Starts the digital clock with the specified interval.
 * If no interval is specified, it defaults to 1000 milliseconds (1 second).
 * @param {number} [interval=1000] - The interval in milliseconds to update the clock.
 * @returns {number} - The interval ID returned by setInterval.
 */
function startClock(interval = 1000) {
    // Get the clock element from the DOM
    const clock = document.getElementById("clock");

    /**
     * Updates the clock element with the current time.
     * @returns {void}
     */
    function update() {
        // Get the current date and time
        const now = new Date();

        // Get the 24 hour format
        const hours24 = now.getHours();
        // Convert to 12 hour format and pad with leading zeros
        const hours12 = String(hours24 % 12 || 12).padStart(2, "0");
        // Get minutes, padded with leading zeros
        const minutes = String(now.getMinutes()).padStart(2, "0");
        // Get seconds, padded with leading zeros
        const seconds = String(now.getSeconds()).padStart(2, "0");
        // Determine AM or PM
        const ampm = hours24 >= 12 ? "PM" : "AM";

        // Log the updated time
        logDebug("log", `Updating clock: ${hours12}:${minutes}:${seconds} ${ampm}`);
        
        // Update the clock element's text content
        clock.textContent = `${hours12}:${minutes}:${seconds} ${ampm}`;
    }

    // If the clock element is not found, log an error
    if(!clock){
        logDebug("error", "Clock element not found in the DOM.");
        return;
    }
    // else if the interval is less than or equal to 0, log an error
    else if(interval <= 0){
        logDebug("error", "Interval must be greater than 0.");
        return;
    }
    // else start the clock and update it at the specified interval
    else{
        // Log success message
        logDebug("log", "Clock element found.");
        // Log starting message
        logDebug("log", `Starting clock with an interval of ${interval} milliseconds.`);
        // Initial
        update();
        // Set interval to update the clock every specified milliseconds
        return setInterval(update, interval);
    };
}

// Log initialization message
logDebug("log", "Initializing Digital Clock Program...");
// Start the clock with default interval
const intervalId = startClock();