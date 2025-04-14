# Vallmere - e-coomerce b2c

Este repositorio contiene la aplicación web para el e-commerce b2c de ropa y accesorios Vallmere, dividida en dos partes: un **backend** desarrollado con Nest.js y un **frontend** basado en HTML vanilla servido por Express (temporal, en un futuro se utilizará el framework Angular). Ambas partes están contenedorizadas usando Docker para facilitar su despliegue y ejecución.

## Tecnologías Utilizadas

### Backend
- **Nest.js**: Framework para construir aplicaciones del lado del servidor eficientes y escalables.
  - Versión: 11.0.1
- **Node.js**: Entorno de ejecución para JavaScript.
  - Versión: 20.11.0

### Frontend
- **HTML Vanilla**: Sin frameworks adicionales (por el momento).
- **Express**: Servidor para servir los archivos estáticos del frontend.
  - Versión: 5.1.0
- **Node.js**: Entorno de ejecución para el servidor Express.
  - Versión: 20.11.0

## Cómo Descargar la Aplicación

### Opción 1: Clonar el Repositorio y ejecutar en local
1. Clona el repositorio desde GitHub:
    https://github.com/SebaScript/vallmere-app.git
2. Asegurate de tener instaladas las tecnologías necesarias:
    - Node.js versión 20.11.0 (con npm)
    - Nest CLI para el backend: npm install -g @nestjs/cli
3. Dirígete a la carpeta backend con el comando:
    cd backend
4. En la carpeta backend, ejecuta el comando:
    npm i
5. Inicia el servidor en modo de desarrollo usando Nest CLI:
    nest start --watch
    - El backend estará disponible en http://localhost:3000/api
    - Por ejemplo, crea un usuario con una petición POST a http://localhost:3000/api/user
    con el body:
    {
        name: foo,
        email: foo@ymail.com
        password: hola123
    }
6. Accede a la carpeta frontend e instala las dependencias:
    npm i
7. inicia el servidor Express:
    node server.js
    - El frontend estará disponible en http://localhost:8080/html/index.html.

### Opción 2: Descargar las imagenes desde DockerHub

Las imagenes están disponibles en:
    - https://hub.docker.com/repository/docker/sebascript555/vallmere-frontend
    - https://hub.docker.com/repository/docker/sebascript555/vallmere-backend

Descargalas ejecutando:
    docker pull sebascript555/vallmere-frontend:latest
    docker pull sebascript555/vallmere-backend:latest

Clona el repositorio como se explica en la opción 1 y en la raíz del proyecto ejecuta:
    docker-compose up

Ahora el backend está disponible en localhost:3000 y el frontend en localhost:8080/hmtl/index.html

