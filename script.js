const btn = document.getElementById("btn");
const time = document.getElementById("timer");
const pop = document.getElementById("pop");
const final = document.getElementById("final");

let score = -1;
let fontSize = window.getComputedStyle(btn).fontSize.split("p")[0];
let timeLeft = 10.0;
let interval;
let bay = 0;

function timer() {
	timeLeft -= 0.01;
	time.innerText = timeLeft.toFixed(2);
	if (timeLeft.toFixed(2) == 0.0) {
		clearInterval(interval);
		final.innerText = score;
		pop.classList.toggle("active");
	}
}

btn.addEventListener("click", () => {
	if (score == -1) {
		interval = setInterval(timer, 10);
	}
	score++;
	if (score < 9) {
		btn.innerText = "0" + (score + 1);
	} else {
		btn.innerText = score + 1;
	}
	pxX = getRandom();
	pxY = getRandom();
	move = "translate(" + String(pxX) + "px, " + String(pxY) + "px)";
	btn.style.transform = move;
	fontSize--;
	btn.style.fontSize = fontSize + "px";
});

function getRandom() {
	positive = Math.floor(Math.random() * 2) == 1;
	px = Math.floor(Math.random() * 300);
	if (!positive) {
		px = px * -1;
	}
	return px;
}

refresh.addEventListener("click", () => {
	location.reload();
});
