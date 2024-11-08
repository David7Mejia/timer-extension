const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");

const updateTimeElements = () => {
  chrome.storage.local.get(["timer"], res => {
    const time = res.timer ?? 0;
    timerElement.textContent = `The timer is at ${time} seconds`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `Time is ${currentTime}`;
};

//the reason we call it first is because the interval will wait 1 second after we have opened the popup to start so here we run it once and then run the interval
updateTimeElements();
setInterval(updateTimeElements, 1000);
chrome.storage.sync.get(["name"], res => {
  const name = res.name ?? "who dis?";
  nameElement.textContent = `Hello, ${name}`;
});
