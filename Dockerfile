# ============================
# Etapa 1: Compilación con Maven
# ============================
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Copiar pom.xml y dependencias primero (mejora el cache de build)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copiar el código fuente
COPY src ./src

# Compilar y empaquetar sin ejecutar tests
RUN mvn clean package -DskipTests

# ============================
# Etapa 2: Despliegue en Tomcat
# ============================
FROM tomcat:9.0-jdk17
LABEL maintainer="Gian <tu-correo>"

# Limpia la app por defecto de Tomcat (ROOT)
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Copia el WAR generado en la primera etapa
COPY --from=builder /app/target/proyecto-deathnote.war /usr/local/tomcat/webapps/ROOT.war

# Exponer el puerto (Render usa 8080)
EXPOSE 8080

# Iniciar Tomcat
CMD ["catalina.sh", "run"]
