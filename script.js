const dial = document.getElementById("dial");

let currentRotation = 0;
let targetRotation = 0;
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        targetRotation += 18;
    } else {
        targetRotation -= 18;
    }

    lastScrollY = currentScrollY;

});

function animateDial() {

    currentRotation += (targetRotation - currentRotation) * 0.08;

    dial.style.transform =
        `rotate(${currentRotation}deg)`;

    requestAnimationFrame(animateDial);

}

animateDial();



// Smooth scrolling for nav links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// Reveal animations

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

document
.querySelectorAll(
".service-card, .stat-card, .cta-section"
)
.forEach(el => {

    observer.observe(el);

});



// Parallax hero effect

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    const scroll =
        window.scrollY;

    if(hero){

        hero.style.backgroundPositionY =
            `${scroll * 0.25}px`;

    }

});



// Animated counters

const counters =
document.querySelectorAll(".stat-card h2");

let countersStarted = false;

function startCounters(){

    if(countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const text =
            counter.innerText;

        const number =
            parseInt(text);

        if(isNaN(number)) return;

        let count = 0;

        const speed =
            number / 80;

        const updateCounter = () => {

            count += speed;

            if(count < number){

                counter.innerText =
                    Math.floor(count);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    text;

            }

        };

        updateCounter();

    });

}

const statsSection =
document.querySelector(".stats");

if(statsSection){

    const statsObserver =
    new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                startCounters();

            }

        });

    },

    {
        threshold:0.4
    }

    );

    statsObserver.observe(
        statsSection
    );

}
