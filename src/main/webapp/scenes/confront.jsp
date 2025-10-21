<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Confrontar</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/style.css">
</head>
<body class="scene-confront">
    <div class="scene-container">
        <h2>Tu amigo descubre la verdad y te traiciona. <br>La policía se acerca...</h2>
        <form action="${pageContext.request.contextPath}/game" method="post">
            <button type="submit" name="choice" value="erase">Borrar evidencias</button>
            <button type="submit" name="choice" value="surrender">Entregarte</button>
        </form>
    </div>
    <script src="${pageContext.request.contextPath}/assets/js/scene-audio.js"></script>

</body>
</html>
