/* App.css */

/* Estilos gerais do app */
.app-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f4f4f4;  /* Cor de fundo mais suave */
}

/* Estilo para o container da pergunta */
.question-container {
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
}

/* Estilos para as opções de resposta */
.options-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  align-items: center;
}

/* Estilos para o card das opções de resposta */
.card {
  padding: 20px;
  width: 250px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Efeito ao passar o mouse sobre o card */
.card:hover {
  transform: translateY(-5px);
}

/* Estilo para quando a resposta estiver correta */
.card.correct {
  border-color: green;
  background-color: #e0ffe0;
}

/* Estilo para quando a resposta estiver errada */
.card.incorrect {
  border-color: red;
  background-color: #ffe0e0;
}

/* Estilo para a pontuação */
p {
  margin-top: 20px;
  font-size: 20px;
}
