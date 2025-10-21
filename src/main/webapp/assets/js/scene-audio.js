// scene-audio.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const c = body.classList;
    let src;
    let startMuted = false;

    // Detectar la escena actual y el tipo de música
    if (c.contains("scene-index")) {
        src = `${window.location.origin}/${window.location.pathname.split("/")[1]}/assets/sounds/portada.mp3`;
        startMuted = true; // solo la portada empieza silenciada
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

    // Crear audio
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audio.load();

    // Si es la portada, precarga en mute
    if (startMuted) {
        audio.muted = true;
    } else {
        // En las demás escenas, reproducir automáticamente
        audio.play().catch(() => console.warn("Autoplay bloqueado, requerirá interacción."));
    }

    // Crear botón
    const btn = document.createElement("button");
    btn.textContent = startMuted ? "🔇" : "🔊";
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

    // Click para alternar sonido
    btn.addEventListener("click", () => {
        if (audio.muted) {
            audio.play().then(() => {
                audio.muted = false;
                btn.textContent = "🔊";
            }).catch(() => console.warn("Reproducción bloqueada hasta interacción."));
        } else {
            audio.muted = true;
            btn.textContent = "🔇";
        }
    });

    document.body.appendChild(btn);
});
