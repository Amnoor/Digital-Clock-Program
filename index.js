// Digital Clock Program

// index.js

// Import the logDebug function from the logs module
import { logDebug } from "./modules/logs/index.js";

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