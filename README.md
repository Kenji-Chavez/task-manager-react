# 📋 Task Manager React

Aplicación web para la **gestión de tareas**, desarrollada con **React** y un servidor local utilizando **JSON Server** como API simulada.

## 🚀 Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 📦 JSON Server
- 🎨 CSS

---

## 📥 Instalación

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 18 o superior recomendada)
- npm

### 1. Clonar el repositorio

```bash
git clone https://github.com/Kenji-Chavez/task-manager-react.git
cd task-manager-react
```

### 2. Instalar las dependencias

#### Servidor (JSON Server)

```bash
cd json-server
npm install
```

#### Cliente (React)

```bash
cd ../react-tasks-app
npm install
```

---

# ▶️ Ejecutar el proyecto

Para que la aplicación funcione correctamente, debes ejecutar **dos procesos simultáneamente**: el servidor y la aplicación React.

## 🖥️ Terminal 1 – Iniciar JSON Server

```bash
cd json-server
npx json-server db.json --watch --port 3001
```

El servidor estará disponible en:

```
http://localhost:3001
```

---

## 💻 Terminal 2 – Iniciar la aplicación React

```bash
cd react-tasks-app
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 📂 Estructura del proyecto

```
task-manager-react/
│
├── json-server/        # API simulada con JSON Server
│   └── db.json
│
└── react-tasks-app/    # Aplicación desarrollada en React
```

---

## 👨‍💻 Autor

**Kenji Chavez Tapia**
