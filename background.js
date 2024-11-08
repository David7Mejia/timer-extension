// service workers go idle for some time then this time would reset
// let time = 0;

// setInterval(() => {
//   time += 1;
//   console.log(time);
// }, 1000);

// alarms would get around this issue
chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener(alarm => {
  chrome.storage.local.get(["timer", "isRunning"], res => {
    const time = res.timer ?? 0;
    const isRunning = res.isRunning ?? true;

    if (!isRunning) {
      return;
    }
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });
    chrome.storage.sync.get(["notificationTime"], res => {
      const notificationTime = res.notificationTime ?? 1000;
      // if (time % notificationTime== 0) {
      //   this.registration.showNotification("Timer", {
      //     body: `${notificationTime / 10} seconds has passed `,
      //     icon: "icon.png",
      //   });
      // }
    });
  });
});
