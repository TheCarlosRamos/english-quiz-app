import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';

const QuizCard = () => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        // Chama a API para pegar a próxima pergunta
        axios.get('http://127.0.0.1:8000/api/pergunta/')
            .then(response => {
                setQuestion(response.data);
                setIsAnswered(false);  // Reseta a resposta após cada nova pergunta
                setSelectedAnswer(null);  // Reseta a resposta selecionada
            })
            .catch(error => {
                console.error('Erro ao carregar a pergunta', error);
            });
    }, []);

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        setIsAnswered(true);
    };

    return (
        <div>
            {question ? (
                <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {question.pergunta}
                        </Typography>
                        <Grid container spacing={2} direction="column" alignItems="center" style={{ marginTop: '20px' }}>
                            {question.opcoes.map((option, index) => (
                                <Grid item key={index}>
                                    <Button
                                        variant="contained"
                                        color={isAnswered ? (index === question.correta ? 'success' : 'error') : 'primary'}
                                        onClick={() => handleAnswer(index)}
                                        disabled={isAnswered}
                                        fullWidth
                                    >
                                        {option}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            ) : (
                <Typography variant="h6" align="center">Carregando pergunta...</Typography>
            )}
        </div>
    );
};

export default QuizCard;
