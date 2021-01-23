const jsClockContainer = document.querySelector(".clock-container");
const jsClockContainerTitle = document.querySelector(".clock-container__title");

function showClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const nowTime = `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }`;

  jsClockContainerTitle.innerText = nowTime;
}

function init() {
  setInterval(showClock, 1000);
}

init();
