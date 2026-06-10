const dial = document.getElementById("dial");

window.addEventListener("scroll", () => {

    const rotation = window.scrollY * 0.25;

    dial.style.transform =
        `rotate(${rotation}deg)`;

});
