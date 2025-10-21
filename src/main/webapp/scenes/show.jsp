<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mostrárselo a alguien</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-show">
    <div class="scene-container">
        <h2>Se lo mostraste a alguien... ¡Grave error! Te delatan a la policía.</h2>
        <form action="${pageContext.request.contextPath}/game" method="post">
            <button type="submit" name="choice" value="manipulate">Intentar manipularlos</button>
            <button type="submit" name="choice" value="accept">Aceptar tu destino</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>
