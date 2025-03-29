# ♻️ Proyecto Reciclaje Inteligente

#María Fernanda Martínez May
#Ángel Gabriel Paulin Azpilcueta 
#Juan Fernando Ruiz Jiménez
#Luis Joel Alvarez Rojas
#Valeria Ixchel Ramírez Rodríguez



Este proyecto es un sistema integral para la gestión del reciclaje, compuesto por cuatro módulos principales:

1. **📱 Aplicación móvil (Flutter/Dart)**
2. **🌐 Frontend (HTML/CSS/JS)**
3. **⚙️ Backend (NestJS)**
4. **🧠 Módulo de Inteligencia Artificial (Python)**

---

## 📦 Estructura del Proyecto

```
Proyecto_Reciclaje/
├── App/                      # App móvil en Flutter
├── Backend/                 # Backend en NestJS
├── Front/                   # Frontend HTML
└── IA/                      # API de clasificación IA en Python
```

---

## 🧱 Descripción de los Módulos

### 1. 📱 App Móvil - `reciclaje_app/`

- **Tecnología:** Flutter (Dart)
- **Funcionalidad:** Interfaz principal para los usuarios. Permite escanear residuos, registrar rutas de reciclaje, visualizar información y estadísticas.
- **Ejecución:**
  ```bash
  flutter pub get
  flutter run
  ```

---

### 2. 🌐 Frontend Web - `Front/`

- **Tecnología:** HTML, CSS, JavaScript
- **Funcionalidad:** Plataforma web para administración, registro de usuarios, analíticas y visualización de rutas.
- **Ejecución:** Abrir los archivos HTML directamente o servir con cualquier servidor local.
  ```bash
  # Usando Python por ejemplo
  cd Front/Pages
  python -m http.server
  ```

---

### 3. ⚙️ Backend - `reciclaje_app_backend/`

- **Tecnología:** NestJS (Node.js + TypeScript)
- **Funcionalidad:** API REST para manejar usuarios, rutas, historial de reciclaje, etc.
- **Ejecución:**

  ```bash
  npm install
  npm run start:dev
  ```

- **Docker disponible:**
  ```bash
  docker-compose up
  ```

---

### 4. 🧠 IA - Clasificación de Residuos - `IA/`

- **Tecnología:** Python + FastAPI (presumiblemente)
- **Archivo principal:** `trash_api.py`
- **Funcionalidad:** Clasificación de residuos usando imágenes y modelos de IA.
- **Ejecución:**
  ```bash
  pip install -r requirements2.txt
  python trash_api.py
  ```

---

## 🔗 Integración entre Módulos

- La **App móvil** consume APIs del **Backend** y puede conectarse con la **IA** para clasificación de basura.
- El **Frontend** está pensado como herramienta administrativa y visual.
- El módulo de **IA** puede desplegarse como un microservicio consumido por la App y/o Backend.

---

## 📌 Requisitos Generales

- Node.js + npm (para el backend)
- Python 3.x (para la IA)
- Flutter SDK (para la app móvil)
- Navegador Web (para el frontend)
- Docker (opcional para backend)

---

## 👥 Equipo

Este proyecto fue desarrollado para una hackatón por el equipo CBE
