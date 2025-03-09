const allbtnelms = document.querySelectorAll(".btn");
let btnToDisplay = "";

const displayElm = document.querySelector(".display");

const buttonAction = () => {
  const value = btn.innerText;
  btnToDisplay += value;
  display(btnToDisplay);
};
// attach click event to all buttons
allbtnelms.forEach((btn) => {
  // console.log(btn)
  btn.addEventListener("click", () => {
    // console.log(btnToDisplay);
    // console.log(value);
  });
});

// update clicked button value to display area
const display = (str) => {
  displayElm.innerText = str;
};
