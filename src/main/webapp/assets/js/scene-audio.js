// scene-audio.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const c = body.classList;
    let src;
    let startMuted = false;

        const pathname = window.location.pathname;
    const parts = pathname.split("/").filter(Boolean);
    const isLocal = parts.length > 0 && parts[0] === "proyecto-deathnote";
    const basePath = isLocal ? `/${parts[0]}` : "";

        if (c.contains("scene-index")) {
        src = `${window.location.origin}${basePath}/assets/sounds/portada.mp3`;
        startMuted = true;
    } else if (
        c.contains("scene-erase") ||
        c.contains("scene-surrender") ||
        c.contains("scene-reject") ||
        c.contains("scene-manipulate")
    ) {
        src = `${window.location.origin}${basePath}/assets/sounds/final.mp3`;
    } else {
        src = `${window.location.origin}${basePath}/assets/sounds/trama.mp3`;
    }


    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audio.load();

    if (startMuted) {
        audio.muted = true;
    } else {
        audio.play().catch(() => console.warn("Autoplay bloqueado, esperará interacción."));
    }


    const btn = document.createElement("button");
    btn.textContent = startMuted ? "🔇" : "🔊";
    Object.assign(btn.style, {
        position: "fixed",
        bottom: "15px",
        right: "20px",
        zIndex: "9999",
        background: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: "50%",
        fontSize: "20px",
        cursor: "pointer",
        padding: "8px 10px",
        color: "#fff",
    });

    btn.addEventListener("click", () => {
        if (audio.muted || audio.paused) {
            audio.muted = false;
            audio.play().then(() => {
                btn.textContent = "🔊";
                localStorage.setItem("soundEnabled", "true");
            }).catch(() => console.warn("Reproducción bloqueada."));
        } else {
            audio.muted = true;
            audio.pause();
            btn.textContent = "🔇";
            localStorage.setItem("soundEnabled", "false");
        }
    });


    const saved = localStorage.getItem("soundEnabled");
    if (saved === "true" && !startMuted) {
        audio.muted = false;
        audio.play().catch(() => {});
        btn.textContent = "🔊";
    } else if (saved === "false") {
        audio.muted = true;
        btn.textContent = "🔇";
    }

    document.body.appendChild(btn);
});
