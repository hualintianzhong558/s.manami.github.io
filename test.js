console.log('javascript is working');

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

function clock() {
    var weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + " (" + w + ")";
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
}

setInterval(clock, 1000);
