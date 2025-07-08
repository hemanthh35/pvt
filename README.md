# Code Judge

A full-stack web application for writing, running, and judging code in a secure environment. Built with FastAPI (Python) for the backend and Next.js (React + TypeScript) for the frontend.

---

## 🚀 Overview

Code Judge lets users write code in a browser-based editor, execute it securely on the backend, and view the output instantly. It is designed for code testing, learning, and quick prototyping.

---

## ✨ Features
- Monaco-powered code editor with syntax highlighting
- Supports Python (and UI for JavaScript)
- Instant code execution with output display
- Modern, responsive UI with custom components
- Secure backend execution with timeout and error handling
- Dockerized for easy development and deployment

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Monaco Editor
- **Backend:** FastAPI (Python), Uvicorn
- **Containerization:** Docker, Docker Compose

---

## 📦 Project Structure

```
code-judge/
├── backend/           # FastAPI backend
│   ├── main.py        # Main API server
│   ├── Dockerfile     # Backend Dockerfile
│   └── ...            # Other backend files
├── frontend/          # Next.js frontend
│   ├── src/
│   │   ├── app/       # Main app and pages
│   │   └── components/ui/ # UI components
│   ├── Dockerfile     # Frontend Dockerfile
│   └── ...            # Other frontend files
├── docker-compose.yml # Orchestration for dev/deploy
└── README.md          # Project documentation
```

---

## 🐳 Quick Start (with Docker)

1. **Install Docker & Docker Compose**
2. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd code-judge
   ```
3. **Start all services:**
   ```sh
   docker-compose up --build
   ```
4. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)

---

## 🧑‍💻 Manual Setup (Local Development)

### Backend
1. Install Python 3.12+
2. Install dependencies:
   ```sh
   cd backend
   pip install fastapi uvicorn python-multipart
   ```
3. Run the server:
   ```sh
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend
1. Install Node.js 20+
2. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
3. Start the dev server:
   ```sh
   npm run dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Usage
- Write code in the editor (default: Python)
- Select language (Python/JavaScript UI, but backend currently supports Python)
- Click "Run Code" to execute
- Output appears below the editor

---

## ⚠️ Security Note
- Code execution is sandboxed with a timeout, but do **not** use in production without further hardening.
- Only Python code is executed on the backend by default.

---

## 📄 License
MIT (or specify your license here) 