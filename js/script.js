const myPharagraf = document.getElementById("hello-goodbye");
const helloButton = document.getElementById("helloBtn");
const goodbyeButton = document.getElementById("goodbyeBtn");

helloButton.addEventListener("click", function () {
  myPharagraf.textContent = `Welcome to our website`;
});
goodbyeButton.addEventListener("click", function () {
  myPharagraf.textContent = `Goodbye and thank you.`;
});
