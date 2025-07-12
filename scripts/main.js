// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", () => {
//   alert("Don't touch me");
// });

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/01.png") {
    myImage.setAttribute("src", "images/02.png");
  } else {
    myImage.setAttribute("src", "images/01.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Basketball genius, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Basketball genius, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
