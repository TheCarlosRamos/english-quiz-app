#!/bin/bash

PROJ_DIR="$(pwd)"
export NVM_DIR="$HOME/.nvm"

gnome-terminal -- bash -c "
cd $PROJ_DIR/backend
source venv/bin/activate
echo '✅ Backend Django ativado!'
python3 manage.py runserver
exec bash
"

gnome-terminal -- bash -c "
export NVM_DIR=\"$HOME/.nvm\"
[ -s \"\$NVM_DIR/nvm.sh\" ] && source \"\$NVM_DIR/nvm.sh\"
nvm use 18
cd $PROJ_DIR/frontend
echo '🚀 Frontend React iniciado!'
npm start
exec bash
"
