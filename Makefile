# Caminho para os diretórios
BACKEND_DIR=backend
FRONTEND_DIR=frontend

# Ativar virtualenv e rodar o backend
run-backend:
	cd $(BACKEND_DIR) && source venv/bin/activate && python manage.py runserver

# Rodar o frontend com Node 18 via NVM
run-frontend:
	cd $(FRONTEND_DIR) && nvm use 18 && npm start

# Rodar ambos em terminais separados (Linux com gnome-terminal)
start:
	gnome-terminal -- bash -c "make run-backend; exec bash" & \
	gnome-terminal -- bash -c "make run-frontend; exec bash"

# Criar e aplicar as migrações do Django
migrate:
	cd $(BACKEND_DIR) && source venv/bin/activate && python manage.py makemigrations && python manage.py migrate

# Popular palavras no banco
populate:
	cd $(BACKEND_DIR) && source venv/bin/activate && python popular_palavras.py

# Inicializar tudo (migrar + popular)
setup: migrate populate

