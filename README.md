# ☠️ Death Note: El Juego (Proyecto Maven - Java Web)

Un juego narrativo web basado en el anime **Death Note**, desarrollado con **Java EE (Servlets + JSP)** y desplegado en **Apache Tomcat 9**.  
El jugador toma decisiones que lo llevan a distintos finales, en un árbol de decisiones inspirado en la historia original.

---

## 🚀 Tecnologías Utilizadas

- **Java 25 (OpenJDK Temurin)**
- **Apache Tomcat 9.0**
- **Maven 3.9**
- **JSP / Servlets**
- **HTML, CSS, JS**
- **JUnit 5 (Pruebas Unitarias)**

---

## ⚙️ Estructura del Proyecto
📁 proyecto-Maven

├── 📁 .idea/                            # Configuración interna de IntelliJ

├── 📁 src

│   ├── 📁 main

│   │   ├── 📁 java

│   │   │   └── 📁 org

│   │   │       └── 📁 example

│   │   │           ├── 📁 servlet

│   │   │           │   ├── MainServlet.java          # Controlador principal: inicia y redirige escenas

│   │   │           │   ├── GameServlet.java          # (Opcional) controlador para flujo extendido

│   │   │           └── 📁 logic

│   │   │               ├── GameLogic.java            # Lógica del árbol de decisiones

│   │   ├── 📁 resources

│   │   └── 📁 webapp

│   │       ├── 📁 WEB-INF

│   │       │   └── web.xml                          # Descriptor del despliegue (servlets y rutas)

│   │       ├── 📁 assets

│   │       │   ├── 📁 css

│   │       │   │   └── style.css                    # Estilos globales de todas las escenas

│   │       │   ├── 📁 js

│   │       │   │   └── scene-audio.js               # Controlador de música por escena

│   │       │   ├── 📁 images                        # Fondos de cada escena

│   │       │   │   ├── scene-index.jpg

│   │       │   │   ├── start.jpg

│   │       │   │   ├── use.jpg

│   │       │   │   ├── destroy.jpg

│   │       │   │   ├── show.jpg

│   │       │   │   ├── hide.jpg

│   │       │   │   ├── surrender.jpg

│   │       │   │   ├── reject.jpg

│   │       │   │   └── manipulate.jpg

│   │       │   └── 📁 sounds                        # Audios del juego

│   │       │       ├── portada.mp3

│   │       │       ├── trama.mp3

│   │       │       └── final.mp3

│   │       ├── 📄 index.jsp                         # Portada principal del juego

│   │       ├── 📄 start.jsp                         # Primer punto de decisión

│   │       ├── 📄 use.jsp                           # Rama “usar el Death Note”

│   │       ├── 📄 destroy.jsp                       # Rama “destruirlo”

│   │       ├── 📄 hide.jsp                          # Rama “esconderlo”

│   │       ├── 📄 show.jsp                          # Rama “mostrarlo”

│   │       ├── 📄 surrender.jsp                     # Final: entregarte

│   │       ├── 📄 reject.jsp                        # Final: rechazar el trato

│   │       ├── 📄 manipulate.jsp                    # Final: manipular la situación

│   │       └── 📄 error.jsp                         # Escena genérica de error

│   └── 📁 test

│       └── 📁 java

│           └── 📁 org

│               └── 📁 example

│                   └── 📁 logic

│                       └── GameLogicTest.java       # Pruebas unitarias con JUnit 5

├── 📄 pom.xml                                      # Dependencias y build Maven

├── 📄 Dockerfile                                      # Compilar y desplegar la app Java (WAR) con Tomcat 9 y JDK 17.

├── 📄 .dockerignore                                      # Excluye carpetas innecesarias (target, .idea, .git, etc.)

├── 📄 .gitignore                                   # Ignorar carpetas y archivos de build

└── 📄 README.md                                    # Documentación general del proyecto

---

## 🧠 Lógica del Juego

Cada decisión del jugador genera una ruta diferente.  
El flujo se gestiona con la clase `GameLogic.java`, que mapea elecciones a escenas JSP.  
Las escenas finales detienen la historia y reproducen un audio distinto.

---

## 🎨 Diseño

- Cada escena utiliza un fondo distinto (`assets/images/scene-*.jpg`).
- Los estilos están centralizados en `style.css`.
- La música cambia entre portada, trama y finales (`assets/sounds`).

---

## 🧪 Pruebas Unitarias

El archivo `GameLogicTest.java` valida:
- Transiciones correctas entre decisiones.
- Identificación de escenas finales.
- Manejo de errores por decisiones no válidas.

Ejecución:
```bash
mvn test

▶️ Ejecución Local

Empaquetar el proyecto:

mvn clean package


Copiar el archivo .war generado en target/ a:

C:\tomcat\webapps\


Iniciar Tomcat:

startup.bat


Abrir en el navegador:

http://localhost:8080/proyecto-deathnote/

🐋 Docker

El proyecto usa Docker para compilar y desplegar la app Java (WAR) con Tomcat 9 y JDK 17.

🔹 Versión final (multietapa)

Se usa un Dockerfile con dos etapas:

Build: compila el proyecto con Maven dentro del contenedor.

Run: copia el .war generado a una imagen limpia de Tomcat y lo ejecuta.

.dockerignore

Para optimizar el build, se excluyen carpetas y archivos innecesarios:

target
.idea
.git
*.iml


☁️ Despliegue en Render

El proyecto está desplegado en Render, utilizando un contenedor Docker multietapa que compila el .war con Maven y lo ejecuta con Tomcat 9 + JDK 17.

🔗 Acceso en línea:
👉 **https://proyecotdeathnote.onrender.com/**

🔹 Proceso de despliegue

Se sube el proyecto a GitHub.

Render detecta automáticamente el Dockerfile.

Durante el build:

Etapa 1: compila el proyecto Java con Maven (mvn clean package).

Etapa 2: copia el .war resultante en Tomcat y ejecuta catalina.sh run.

La aplicación se expone en el puerto 8080 (Render la publica vía HTTPS).

🔹 Archivos relevantes

Dockerfile: define la imagen y las etapas del build.

.dockerignore: excluye carpetas innecesarias (target, .idea, .git, etc.).

pom.xml: define dependencias y empaquetado WAR.
