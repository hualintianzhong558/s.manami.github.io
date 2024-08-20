function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('clockDisplay').textContent = timeString;
}

setInterval(showTime, 1000);
showTime();

function updateBackground() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const startColor = [255, 255, 255];
    const endColor = [255, 122, 127];

    const currentColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollPercent);
    });

    document.body.style.background = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
}

window.addEventListener('scroll', updateBackground);
updateBackground();
