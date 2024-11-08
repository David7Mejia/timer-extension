const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const timeInput = document.getElementById("time-input");
saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({
    name,
    notificationTime,
  });
});

chrome.storage.sync.get(["name", "notificationTime"], res => {
  nameInput.value = res.name ?? "???";
  timeInput.value = res.notificationTime ?? 1000;
});
