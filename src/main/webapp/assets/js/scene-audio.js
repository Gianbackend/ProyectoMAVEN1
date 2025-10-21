// scene-audio.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const c = body.classList;
    let src;
    let startMuted = false;

    // Detectar la escena actual y elegir la música
    if (c.contains("scene-index")) {
        src = `${window.location.origin}/${window.location.pathname.split("/")[1]}/assets/sounds/portada.mp3`;
        startMuted = true; // la portada empieza silenciada
    } else if (
        c.contains("scene-erase") ||
        c.contains("scene-surrender") ||
        c.contains("scene-reject") ||
        c.contains("scene-manipulate")
    ) {
        src = `${window.location.origin}/${window.location.pathname.split("/")[1]}/assets/sounds/final.mp3`;
    } else {
        src = `${window.location.origin}/${window.location.pathname.split("/")[1]}/assets/sounds/trama.mp3`;
    }

    // Crear elemento de audio
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";

    // Verificar si el usuario ya dio permiso antes (sessionStorage)
    const audioEnabled = sessionStorage.getItem("audioEnabled") === "true";

    // Configurar mute inicial según el contexto
    if (startMuted && !audioEnabled) {
        audio.muted = true;
    } else {
        audio.muted = false;
        audio.play().catch(() => console.warn("Autoplay bloqueado hasta interacción."));
    }

    // Crear botón de sonido
    const btn = document.createElement("button");
    btn.textContent = audio.muted ? "🔇" : "🔊";
    btn.classList.add("sound-toggle");
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

    // Controlar el mute/desmute y guardar estado global
    btn.addEventListener("click", () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play().catch(() => console.warn("Reproducción bloqueada hasta interacción."));
            btn.textContent = "🔊";
            sessionStorage.setItem("audioEnabled", "true");
        } else {
            audio.muted = true;
            audio.pause();
            btn.textContent = "🔇";
            sessionStorage.setItem("audioEnabled", "false");
        }
    });

    // Agregar el botón al documento
    document.body.appendChild(btn);
});
