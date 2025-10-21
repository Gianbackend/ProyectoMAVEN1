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
📁 PROYECTO_MAVEN1
├── 📁 src
│   ├── 📁 main
│   │   ├── 📁 java
│   │   │   └── 📁 org
│   │   │       └── 📁 example
│   │   │           ├── 📁 servlet        → Controladores del flujo del juego
│   │   │           │   ├── GameServlet.java
│   │   │           │   └── Main.java
│   │   │           └── 📁 logic          → Lógica principal del árbol de decisiones
│   │   │               ├── GameLogic.java
│   │   │               ├── Animal.java
│   │   │               ├── Herbivoro.java
│   │   │               ├── Carnivoro.java
│   │   │               ├── Species.java
│   │   │               └── Lobo.java
│   │   ├── 📁 resources
│   │   │   └── config.properties         → Configuración adicional del juego
│   │   └── 📁 webapp
│   │       ├── 📁 assets                 → Imágenes, sonidos y estilos
│   │       │   ├── style.css
│   │       │   ├── logo.png
│   │       │   └── click.wav
│   │       ├── 📁 WEB-INF
│   │       │   └── web.xml              → Configuración del proyecto
│   │       ├── index.jsp                → Página principal
│   │       ├── escena1.jsp              → Primera escena del juego
│   │       └── escena2.jsp              → Segunda escena del juego
│   └── 📁 test
│       └── 📁 org.example.logic
│           └── GameLogicTest.java      → Pruebas unitarias con JUnit
├── 📄 pom.xml                           → Dependencias y configuración Maven
└── 📄 .gitignore                        → Exclusiones para control de versiones


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


