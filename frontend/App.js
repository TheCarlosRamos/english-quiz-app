import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [pergunta, setPergunta] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    carregarPergunta();
  }, []);

  const carregarPergunta = () => {
    axios
      .get("http://localhost:8000/api/pergunta/")
      .then((res) => {
        setPergunta(res.data);
        setRespostaSelecionada(null);
      });
  };

  const verificarResposta = (index) => {
    setRespostaSelecionada(index);
    if (index === pergunta.correta) {
      setPontuacao(pontuacao + 1);
      setTimeout(carregarPergunta, 1000);
    }
  };

  if (!pergunta) return <div>Carregando...</div>;

  return (
    <div className="app-container">
      <h1>Quiz de Inglês</h1>
      <div className="question-container">
        <h2>Qual o significado de <strong>{pergunta.palavra}</strong>?</h2>
        <div className="options-container">
          {pergunta.opcoes.map((opcao, i) => (
            <div
              key={i}
              onClick={() => verificarResposta(i)}
              className={`card ${respostaSelecionada === i ? (i === pergunta.correta ? 'correct' : 'incorrect') : ''}`}
            >
              {opcao}
            </div>
          ))}
        </div>
        <p>Pontuação: {pontuacao}</p>
      </div>
    </div>
  );
}

export default App;
