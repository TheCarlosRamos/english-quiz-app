import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pergunta, setPergunta] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);

  // Carregar a próxima pergunta quando o componente for montado
  useEffect(() => {
    carregarPergunta();
  }, []);

  // Função que busca a próxima pergunta
  const carregarPergunta = () => {
    axios
      .get("http://localhost:8000/api/pergunta/")
      .then((res) => {
        setPergunta(res.data);
        setRespostaSelecionada(null);
      })
      .catch((error) => console.log("Erro ao carregar pergunta:", error));
  };

  // Função para verificar a resposta
  const verificarResposta = (index) => {
    setRespostaSelecionada(index);
    if (index === pergunta.correta) {
      setPontuacao(pontuacao + 1);
    }
    setTimeout(carregarPergunta, 1000); // Carregar próxima pergunta após 1 segundo
  };

  if (!pergunta) return <div>Carregando...</div>;

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Quiz de Inglês</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 20 }}>
        Qual o significado de <strong>{pergunta.palavra}</strong>?
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {pergunta.opcoes.map((opcao, i) => (
          <div
            key={i}
            onClick={() => verificarResposta(i)}
            style={{
              padding: 20,
              backgroundColor: respostaSelecionada === i ? (i === pergunta.correta ? "green" : "red") : "#fff",
              color: respostaSelecionada === i ? "#fff" : "#333",
              border: "2px solid",
              borderColor: respostaSelecionada === i ? (i === pergunta.correta ? "green" : "red") : "#ccc",
              borderRadius: 10,
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
          >
            {opcao}
          </div>
        ))}
      </div>
      <p style={{ marginTop: "20px", textAlign: "center", fontSize: "1.2rem" }}>
        Pontuação: {pontuacao}
      </p>
    </div>
  );
}

export default App;
