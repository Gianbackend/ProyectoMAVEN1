<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Esconderlo</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-hide">
    <div class="scene-container">
        <h2>Lo escondiste, pero alguien nota tu comportamiento extraño.</h2>
        <p>¿Qué haces?</p>
        <form action="${pageContext.request.contextPath}/game" method="post">
            <button type="submit" name="choice" value="confront">Confrontarlo</button>
            <button type="submit" name="choice" value="deny">Negarlo</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>
