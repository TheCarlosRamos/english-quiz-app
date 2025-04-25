# English Quiz App 🎮

Um aplicativo web de quiz para praticar vocabulário em inglês, desenvolvido com **Django** no backend e **React** no frontend. O app sorteia palavras aleatórias em inglês e o usuário deve selecionar o significado correto em português.

---

## 🧠 Funcionalidades

- Geração de perguntas aleatórias com alternativas.
- Correção automática da resposta e pontuação.
- Backend com Django REST API.
- Frontend em React com UI amigável.
- Integração completa entre frontend e backend.
- Fácil de estender com mais palavras e funcionalidades.

---

## 🚀 Tecnologias utilizadas

### Backend
- Python 3.10
- Django 4+
- Django REST Framework
- django-cors-headers

### Frontend
- Node.js 18+
- React
- Axios

---

## ⚙️ Instalação e execução

### 🔧 Pré-requisitos

- Python 3.10+
- Node.js 18 ou superior
- npm
- (Opcional) `nvm` para gerenciar versões do Node

---

### 🐍 Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
