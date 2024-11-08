const timeEl = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
const nameEl = document.getElementById("name");
timeEl.textContent = `Time is ${currentTime}`;

chrome.storage.sync.get(["name"], result => {
  nameEl.textContent = `Hello, ${result.name}`;
});
