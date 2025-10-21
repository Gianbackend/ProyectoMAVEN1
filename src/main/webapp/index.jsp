<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Death Note - El Juego</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-index">
    <div class="scene-container">
        <h1>Death Note: El Juego</h1>
        <p>Un cuaderno ha caído del cielo... ¿te atreves a tocarlo?</p>
        <form action="${pageContext.request.contextPath}/game" method="get">
            <button type="submit">Iniciar juego</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>