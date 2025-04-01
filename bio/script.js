// Typewriter Effect
const typewriter = document.querySelector(".typewriter");
const words = ["Student", "Developer", "Music Creator"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];
    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    typewriter.textContent = currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", typeEffect);
