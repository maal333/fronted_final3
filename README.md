# 📦 Gestor de Suscripciones con React

Este proyecto es una aplicación web construida con **React + Vite**, que permite gestionar suscripciones . Incluye autenticación basada en contexto, rutas protegidas, y CRUD de suscripciones consumiendo una API REST (simulada).

---

## 🚀 Tecnologías

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Context API](https://reactjs.org/docs/context.html)
- [JSON Server (modo demo)](https://github.com/typicode/json-server)

---

## 📁 Estructura del proyecto

![{30FAF83B-4D0E-49D8-8557-088994E15C15}](https://github.com/user-attachments/assets/42577b4b-fdf6-459d-81a4-ae3f16b6e102)



## ✅ Funcionalidades

- 🔐 Login con validación contra API
- 👁️ Rutas protegidas con React Router + Context
- 📄 Listado de suscripciones (fetch desde API)
- ➕ Agregar nueva suscripción
- ✏️ Editar suscripción existente
- ❌ Eliminar suscripción
- 🔎 Filtro/búsqueda de suscripciones por nombre o categoría
- 💾 Persistencia de sesión con `localStorage`


## 🚀 Ejecución del proyecto

El proyecto se ejecuta con dos servicios en paralelo:

- **Backend**: JSON-Server (puerto por defecto: `http://localhost:3000`)
- **Frontend**: Vite + React (puerto por defecto: `http://localhost:5173`)

## 💾 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/track-x.git
cd track-x

# 2. Instala las dependencias del frontend
npm install

# 3. Inicia el servidor JSON (backend simulado)
npx json-server --watch db.json --port 3000

# 4. En una nueva terminal, inicia el frontend con Vite
npm run dev
```

## ✅ Usuario Prueba 

Correo: admin@pixelhub.com
Contraseña: admin123

Correo:user@pixelhub.com
Contraseña:user123

## 📫 Autor

Desarrollado por **Mauricio Guaman**  
Estudiante del cesde+++++++++++++++
🚀 ¡Gracias por visitar este proyecto!
