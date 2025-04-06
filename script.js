const allbtnelms = document.querySelectorAll(".btn");
let strToDisplay = "";
const displayElm = document.querySelector(".display");

const operators = ["%", "/", "*", "+", "-"];

// load the sound
const audio = new Audio("./assets/prank.mp3");
// let lastOperator = "";
const buttonAction = (value) => {
  displayElm.classList.remove("prank");
  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }
  if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
  }
  if (value === "=") {
    // console.log(lastOperator,"last")
    lastOperator = "";
    // get the last character
    const lastChar = strToDisplay[strToDisplay.length - 1];
    // console.log(lastChar)

    // check if it get the one last operator character
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return displayTotal();
  }
  // to prevent multiple operator to press

  if (operators.includes(value)) {
    // lastOperator = value;
    // console.log(lastOperator);
    // get the last char
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      // remove the last char
      strToDisplay = strToDisplay.slice(0, -1);
    }
  }

  // to prevent multiple dot
  // if (value === ".") {
  //   // get the index value of last operator
  //   const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
  //   console.log(lastOperatorIndex, "----");

  //   // make the lastnumberset on the last operator
  //   const lastNumberSet = strToDisplay.slice(lastOperatorIndex);
  //   console.log(lastNumberSet);
  //   if (lastNumberSet.includes(".")) {
  //     return;
  //   }
  //   if (!lastOperator && strToDisplay.includes(".")) {
  //     return;
  //   }
  // }

  if (value === ".") {
    const parts = strToDisplay.split(/[-+*/%]/);
    console.log(parts);

    const currentNumber = parts[parts.length - 1];
    if (currentNumber.includes(".")) return;

    if (currentNumber === "" && parts.length > 0) {
      strToDisplay += 0;
    }
  }
  strToDisplay += value;
  display(strToDisplay);
};
// attach click event to all buttons
allbtnelms.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.scale = ".9";
  });
  btn.addEventListener("click", () => {
    btn.style.scale = "1";

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
  const extranumber = randomNumber();
  if (extranumber) {
    displayElm.classList.add("prank");
    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 4000);
  }
  const total = eval(strToDisplay) + extranumber;
  strToDisplay = total.toString();
  display(strToDisplay);
};

// random number generated
const randomNumber = () => {
  const num = Math.round(Math.random());
  return num < 8 ? num : 0;
};
