

function draw() {
    setInterval(createStars, 30); 
    setInterval(starFall, 3000); 
    var canvas = document.getElementById("nightSky");
    var art = canvas.getContext("2d");
    art.beginPath();
    art.arc(240, 60, 60, 0, Math.PI * 2, true);
    color.addColorStop(0, '#cae3ef');
    color.addColorStop(0.5, '#cde1e8');
    color.addColorStop(1, '#7aa4b4');
    art.fillStyle = color;
    art.fill();
    canvas.style.setProperty("-webkit-filter", "drop-shadow(5px 5px 5px white)");
    star.style.animation =
      "twinkle " + "1s linear infinite alternate";
}

function createStars() {
        const createNewStar = document.getElementById('starsSmall');
        const star = document.createElement('div');
        createNewStar.innerHTML = star.outerHTML;
        star.className = 'glow'

        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.backgroundColor = "white";
        star.style.top =  Math.random() * window.innerHeight + 'px';
        star.style.position =  "absolute";
        star.style.zIndex = "-1";
        document.body.appendChild(star);
        setTimeout (() => {
            star.remove();
        }, 70000)
}

function starFall() {
    const fall = document.getElementById("fallingStar");
    const createFall = document.createElement('div');
    fall.innerHTML = createFall.outerHTML;
    createFall.style.position = "fixed";
    function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
    }
    var lengthStar = randomNumber(100, 150);
    createFall.style.width = lengthStar + "px";
    createFall.style.height = "2px";
    createFall.style.backgroundImage =
    "linear-gradient(to right, white 40%, transparent)";
    document.body.appendChild(createFall);
    createFall.style.left = Math.random() * window.innerWidth + 'px';
    createFall.style.top = Math.random() * window.innerHeight + 'px';
    createFall.style.zIndex = "-1";
    createFall.style.transform = "rotate(7deg)";
    setTimeout (() => {
            createFall.remove();
        }, 900)
    createFall.style.animation =
      "hide 1s linear infinite alternate";
}

