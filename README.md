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

src/
├── App.jsx
├── main.jsx
├── pages/
│ ├── Login/
│ ├── Dashboard/
│ ├── AddSubscription/
│ └── EditSubscription/
├── utils/
│ ├── AuthContext.jsx
│ └── PrivateRoute.jsx
├── services/
│ └── api.js
├── components/
│ └── SubscriptionCard/
├── styles/
│ ├── global.css
│ ├── Login.css
│ └── Dashboard.css
public/
├── index.html
![{76F44877-E923-44EE-90F9-02350B92003B}](https://github.com/user-attachments/assets/377af7cd-ab77-4261-8f00-6fe25f4484ac)




## ✅ Funcionalidades

- 🔐 Login con validación contra API
- 👁️ Rutas protegidas con React Router + Context
- 📄 Listado de suscripciones (fetch desde API)
- ➕ Agregar nueva suscripción
- ✏️ Editar suscripción existente
- ❌ Eliminar suscripción
- 🔎 Filtro/búsqueda de suscripciones por nombre o categoría
- 💾 Persistencia de sesión con `localStorage`
