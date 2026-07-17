Task Manager React
Aplicación de gestión de tareas desarrollada con React y un servidor local basado en JSON.

Instalación
Para ejecutar este proyecto en tu computadora, asegúrate de tener instalado Node.js. Luego, sigue estos pasos:

Clonar el repositorio:
git clone https://github.com/Kenji-Chavez/task-manager-react.git
cd task-manager-react

Instalar dependencias del servidor:
cd json-server
npm install

Instalar dependencias de la aplicación React:
cd ../react-tasks-app
npm install

⚙️ Cómo ejecutar el proyecto
Necesitas tener dos terminales abiertas, una para el servidor y otra para la aplicación web.

1. Iniciar el servidor (JSON Server)
Desde la carpeta raíz, entra a la carpeta del servidor y ejecútalo:
cd json-server
npx json-server .\db.json --watch --port 3001

2. Iniciar la aplicación de React
Desde una nueva terminal (en la carpeta raíz), entra a la carpeta del cliente y ejecútalo:
cd react-tasks-app
npm run dev
