
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

var typed = new Typed(".typing", {
    strings: [
        "Frontend Developer",
        "AI Enthusiast",
        "Cybersecurity Learner",
        "Full Stack Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

AOS.init({
    duration: 1000
});
