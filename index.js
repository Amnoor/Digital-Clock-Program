// Digital Clock Program

// index.js

/**
 * Updates the digital clock on the webpage every given interval.
 * 
 * @param {number} [interval=1000] - The time interval in milliseconds to update the clock.
 */
function UpdateClock(interval=1000){
    setInterval(() => {const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0') % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;}, interval);
}

// Call the function to start updating the clock
UpdateClock();