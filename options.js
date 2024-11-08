const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storage.sync.set(
    {
      name,
    },
    () => {
      console.log(`Name is set to ${name}`);
    }
  );
});

chrome.storage.sync.get(["name"], result => {
  console.log(result);
});
