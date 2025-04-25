import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pergunta, setPergunta] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    carregarPergunta();
  }, []);

  const carregarPergunta = () => {
    axios.get("http://localhost:8000/api/pergunta/")
      .then(res => {
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
    <div style={{ padding: 20 }}>
      <h1>Quiz de Inglês</h1>
      <p>Qual o significado de <strong>{pergunta.palavra}</strong>?</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        {pergunta.opcoes.map((opcao, i) => (
          <div
            key={i}
            onClick={() => verificarResposta(i)}
            style={{
              padding: 20,
              border: "2px solid",
              borderColor: respostaSelecionada === i
                ? (i === pergunta.correta ? "green" : "red")
                : "#ccc",
              borderRadius: 10,
              cursor: "pointer"
            }}
          >
            {opcao}
          </div>
        ))}
      </div>
      <p>Pontuação: {pontuacao}</p>
    </div>
  );
}

export default App;
