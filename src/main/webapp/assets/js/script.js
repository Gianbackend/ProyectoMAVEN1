// src/main/webapp/assets/js/script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".scene-container");
    if (container) {
        container.style.opacity = 0;
        setTimeout(() => container.style.transition = "opacity 3s", 10);
        setTimeout(() => container.style.opacity = 1, 50);
    }
});
