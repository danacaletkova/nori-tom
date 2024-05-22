let wedding = new Date("Sep 7, 2024, 17:00:00 UTC+2").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = wedding - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 10) {
    days = `0${days}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let daysElement = document.querySelector("#days");
  daysElement.innerHTML = days;

  let hoursElement = document.querySelector("#hours");
  hoursElement.innerHTML = hours;

  let minutesElement = document.querySelector("#minutes");
  minutesElement.innerHTML = minutes;

  let secondsElement = document.querySelector("#seconds");
  secondsElement.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "";
  }
}, 1000);
