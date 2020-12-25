const mode = document.getElementById("mode");
const hourHand = document.getElementById("hour");
const minHand = document.getElementById("min");
const secHand = document.getElementById("sec");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

mode.addEventListener("click", () => {
	const html = document.querySelector("html");
	if (html.classList.contains("light")) {
		html.classList.remove("light");
	} else {
		html.classList.add("light");
	}
});

const days = [
	"Pazar",
	"Pazartesi",
	"Salı",
	"Çarşamba",
	"Perşembe",
	"Cuma",
	"Cumartesi",
];
const months = [
	"Ocak",
	"Şubat",
	"Mart",
	"Nisan",
	"Mayıs",
	"Haziran",
	"Temmuz",
	"Ağustos",
	"Eylül",
	"Ekim",
	"Kasım",
	"Aralık",
];

function initTime() {
	const time = new Date();
	const day = time.getDay();
	const date = time.getDate();
	const month = time.getMonth();
	let hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	const hourDeg = hours * 30 + minutes * 0.5;
	const minDeg = minutes * 6;
	const secDeg = seconds * 6;

	hourHand.style.transform = `rotate(${hourDeg}deg)`;
	minHand.style.transform = `rotate(${minDeg}deg)`;
	secHand.style.transform = `rotate(${secDeg}deg)`;

	timeEl.innerHTML = `${hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:<small>${seconds < 10 ? `0${seconds}` : seconds}</small>`;

	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

	setTimeout(initTime, 1000);
}
initTime();
