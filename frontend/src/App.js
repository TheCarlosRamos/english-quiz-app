import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [fase, setFase] = useState("escolher"); 
  const [dificuldade, setDificuldade] = useState(null);
  const [pergunta, setPergunta] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);

  const carregarPergunta = () => {
    if (!dificuldade) return;

    axios
      .get(`http://localhost:8000/api/pergunta/?dificuldade=${dificuldade}`)
      .then((res) => {
        setPergunta(res.data);
        setRespostaSelecionada(null);
      });
  };

  useEffect(() => {
    if (fase === "jogar") {
      carregarPergunta();
    }
  }, [fase, dificuldade]);

  const escolherDificuldade = (nivel) => {
    setDificuldade(nivel);
    setFase("jogar");
  };

  const verificarResposta = (index) => {
    setRespostaSelecionada(index);
    if (index === pergunta.correta) {
      setPontuacao(pontuacao + 1);
      setTimeout(carregarPergunta, 1000);
    }
  };

  if (fase === "escolher") {
    return (
      <div className="app-container">
        <h1>Quiz de Inglês</h1>
        <h2>Escolha a dificuldade:</h2>
        <div className="options-container">
          <div className="card" onClick={() => escolherDificuldade("facil")}>Fácil</div>
          <div className="card" onClick={() => escolherDificuldade("medio")}>Médio</div>
          <div className="card" onClick={() => escolherDificuldade("dificil")}>Difícil</div>
        </div>
      </div>
    );
  }

  if (!pergunta) return <div>Carregando...</div>;

  return (
    <div className="app-container">
      <h1>Quiz de Inglês</h1>
      <div className="question-container">
        <h2>{pergunta.pergunta}</h2>
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
