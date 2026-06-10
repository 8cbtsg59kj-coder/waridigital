const dial = document.getElementById("dial");

window.addEventListener("scroll", () => {

const scrollPosition = window.scrollY;

dial.style.transform =
`rotate(${scrollPosition * 0.25}deg)`;

});
