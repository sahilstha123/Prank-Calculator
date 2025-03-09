const allbutnelms = document.querySelectorAll(".btn");
console.log(allbutnelms);
let strTodisplay = "";
allbutnelms.forEach((item) => {
  item.addEventListener("click", () => {
    const value = item.innerText;
    strTodisplay += value;
    console.log(strTodisplay)
    // console.log(value);
  });
});
