// Digital Clock Program

// index.js

/**
 * Starts the digital clock with the specified interval.
 * If no interval is provided, the clock updates every 1000 milliseconds (1 second).
 * @param {number} [interval=1000] - The interval in milliseconds at which the clock should update.
 * @returns {number} - The ID of the interval which can be used to clear the interval.
 */
function startClock(interval = 1000) {
    // Get the clock element from the DOM
    const clock = document.getElementById("clock");
    // If the clock element is not found, return
    if (!clock) return;

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

        // Update the clock element's text content
        clock.textContent = `${hours12}:${minutes}:${seconds} ${ampm}`;
    }

    // Initial
    update();
    // Set interval to update the clock every specified milliseconds
    return setInterval(update, interval);
}

// Start the clock with default interval
startClock();