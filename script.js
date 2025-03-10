const allbtnelms = document.querySelectorAll(".btn");
let strToDisplay = "";

const displayElm = document.querySelector(".display");

const operators = ["%", "/", "*", "+", "-"];

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }
  if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
  }
  if (value === "=") {
    // get the last character
    const lastChar = strToDisplay[strToDisplay.length - 1];
    // console.log(lastChar)

    // check if it get the one last operator character
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return displayTotal();
  }
  strToDisplay += value;
  display(strToDisplay);
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

// calculate total
const displayTotal = () => {
  const total = eval(strToDisplay);
  strToDisplay = total.toString();
  display(strToDisplay);
};
