// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const words = [
    "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार",
    "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार", "श्रीपाद श्रीवल्लभ",
    "दत्तात्रेय अवतार",
    // Add more words here
];

function createFallingWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    const wordElement = document.createElement("div");
    wordElement.classList.add("falling-word");
    wordElement.textContent = word;
    wordElement.style.left = `${Math.random() * 100}vw`;
    wordElement.style.animationDuration = `${Math.random() * 2 + 3}s`; // Vary the animation duration
    document.querySelector(".falling-words-container").appendChild(wordElement);

    setTimeout(() => {
        wordElement.remove();
    }, 5000);
}

setInterval(createFallingWord, 10000);

