<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Inicio</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-start">
    <div class="scene-container">
        <h2>Encuentras un misterioso cuaderno: <br> “El humano cuyo nombre sea escrito en este cuaderno morirá...”</h2>
        <p>¿Qué harás?</p>

        <form action="${pageContext.request.contextPath}/game" method="post">
            <button type="submit" name="choice" value="use">Usarlo</button>
            <button type="submit" name="choice" value="destroy">Destruirlo</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>

