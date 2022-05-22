const clock = document.querySelector("h2#clock");
const dates = document.querySelector("h3#dates");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  dates.innerText = `${date.getFullYear()}년${date.getMonth()}월${date.getDay()}일`;
}

getClock();
setInterval(getClock, 1000);