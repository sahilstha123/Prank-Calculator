const allbtnelms = document.querySelectorAll(".btn");
let btnToDisplay = "";
allbtnelms.forEach((btn) => {
  // console.log(btn)
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    btnToDisplay += value;
    console.log(btnToDisplay);
    // console.log(value);
  });
});
