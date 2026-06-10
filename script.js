// =====================
// START BUTTON
// =====================

const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    loader.style.display = "none";
});

// =====================
// MUSIC
// =====================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    music.play();
    musicBtn.innerHTML = "🎵 Music Playing";
});

// =====================
// IMAGE SLIDER
// =====================

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
];

let current = 0;

setInterval(() => {

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    document.getElementById("slider").src = photos[current];

}, 3000);

// =====================
// TYPEWRITER EFFECT
// =====================

const message = `
Dear Chouhan ❤️

Happy Birthday to the most beautiful person.

May your smile always shine brighter
than the stars.

May every dream become reality.

May happiness always stay with you.

Thank you for being so special.

- Mahendra ❤️
`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typing").innerHTML +=
            message.charAt(i);

        i++;

        setTimeout(typeWriter, 50);
    }
}

typeWriter();

// =====================
// BIRTHDAY COUNTER
// =====================

const birthDate =
new Date("2007-11-04");

function updateDays() {

    const now = new Date();

    const diff =
        now - birthDate;

    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById("days")
        .innerHTML =
        days +
        " Beautiful Days ❤️";
}

updateDays();

setInterval(updateDays, 1000);

// =====================
// FLOATING HEARTS
// =====================

setInterval(() => {

    let heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "🌹"
    ];

    heart.innerHTML =
        hearts[
        Math.floor(
            Math.random() *
            hearts.length
        )
    ];

    heart.style.left =
        Math.random() *
        100 +
        "vw";

    heart.style.fontSize =
        Math.random() *
        20 +
        20 +
        "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 300);

// =====================
// CAKE MAGIC
// =====================

const cake =
document.getElementById("cake");

cake.addEventListener("click", () => {

    for (let i = 0; i < 100; i++) {

        let confetti =
            document.createElement("div");

        confetti.classList.add("heart");

        const items = [
            "🎉",
            "🎊",
            "✨",
            "❤️",
            "💖"
        ];

        confetti.innerHTML =
            items[
            Math.floor(
                Math.random() *
                items.length
            )
        ];

        confetti.style.left =
            Math.random() *
            100 +
            "vw";

        confetti.style.fontSize =
            Math.random() *
            25 +
            20 +
            "px";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    alert(
        "🎂 Happy Birthday Chouhan ❤️"
    );
});

// =====================
// FINAL SURPRISE
// =====================

const wishBtn =
document.getElementById("wishBtn");

const popup =
document.getElementById("popup");

wishBtn.addEventListener("click", () => {

    popup.style.display =
        "block";

});

// Close popup on click

popup.addEventListener("click", () => {

    popup.style.display =
        "none";

});

// =====================
// SCROLL ANIMATION
// =====================

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform =
                "translateY(0px)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".message,.gallery,.birthday,.special,.cake,.surprise"
).forEach(section => {

    section.style.opacity = 0;
    section.style.transform =
        "translateY(80px)";
    section.style.transition =
        "1s";

    observer.observe(section);

});