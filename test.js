console.log('javascript is working');

function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clockDisplay').textContent = timeString;
}

setInterval(showTime, 1000);
