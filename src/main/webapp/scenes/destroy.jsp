<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Destruirlo</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-destroy">
    <div class="scene-container">
        <h2>Intentas destruir el cuaderno, pero aparece Ryuk, el Shinigami.</h2>
        <p>“Eso no está permitido… pero te daré una oportunidad.”</p>

        <form action="${pageContext.request.contextPath}/game" method="post">
            <button type="submit" name="choice" value="negotiate">Negociar con Ryuk</button>
            <button type="submit" name="choice" value="reject">Rechazar su trato</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>
