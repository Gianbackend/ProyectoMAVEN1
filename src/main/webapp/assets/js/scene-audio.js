// scene-audio.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const c = body.classList;
    let src;
    let startMuted = false;

    // Detectar escena y música
    if (c.contains("scene-index")) {
        src = `${window.location.origin}/${window.location.pathname.split("/")[1]}/assets/sounds/portada.mp3`;
        startMuted = true; // portada empieza en silencio
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
    audio.load();

    // Comprobar si ya hay permiso previo
    const permisoPrevio = sessionStorage.getItem("audioPermitido") === "true";

    // Portada: mute inicial
    if (startMuted) {
        audio.muted = true;
    } else if (permisoPrevio) {
        // Escenas posteriores: intentar reproducir si ya se otorgó permiso
        audio.play().catch(() => console.warn("Autoplay bloqueado, esperando interacción."));
    }

    // Crear botón de sonido
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

    // Evento de clic (bocina)
    btn.addEventListener("click", () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play()
                .then(() => {
                    btn.textContent = "🔊";
                    sessionStorage.setItem("audioPermitido", "true"); // guardar permiso
                })
                .catch(() => console.warn("Bloqueado hasta interacción."));
        } else {
            audio.muted = true;
            btn.textContent = "🔇";
            sessionStorage.removeItem("audioPermitido");
        }
    });

    // Si el usuario hace clic en cualquier parte, intentar reproducir (por seguridad)
    document.body.addEventListener("click", () => {
        if (!audio.muted && audio.paused) {
            audio.play().catch(() => {});
        }
    });

    document.body.appendChild(btn);
});
