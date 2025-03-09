const allbtnelms = document.querySelectorAll(".btn");
let btnToDisplay = "";

const displayElm = document.querySelector(".display");

const buttonAction = (value) => {
  if (value === "AC") {
    btnToDisplay = "";
    return display(btnToDisplay)
  }
  btnToDisplay += value;
  display(btnToDisplay);
};
// attach click event to all buttons
allbtnelms.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});

// update clicked button value to display area
const display = (str) => {
  displayElm.innerText = str || "0.0";
};
