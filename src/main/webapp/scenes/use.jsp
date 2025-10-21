<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Usarlo</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-use">
    <div class="scene-container">
        <h2>Has decidido usar el Death Note<br>... el poder te consume.</h2>
        <p>¿Qué harás ahora?</p>
        <form action="${pageContext.request.contextPath}/game" method="post">
            <button type="submit" name="choice" value="hide">Esconderlo</button>
            <button type="submit" name="choice" value="show">Mostrárselo a alguien</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>
