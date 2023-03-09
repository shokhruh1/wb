const $saveBtn = document.querySelector("#save");
const $deleteBtn = document.querySelector("#delete");

let arr = ["Ronaldo", "Messi", "Mbappe", "Benzema", "Karvahal"];

$saveBtn.addEventListener("click", () => {
  localStorage.setItem("pleyrs", JSON.stringify(arr));
});

$deleteBtn.addEventListener("click", () => {
  const dataInLocalStorage = JSON.parse(localStorage.getItem("pleyrs"));
  dataInLocalStorage.splice(0, 1);
  localStorage.setItem("pleyrs", JSON.stringify(dataInLocalStorage));
});
