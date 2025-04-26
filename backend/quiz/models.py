from django.db import models

class Palavra(models.Model):
    ingles = models.CharField(max_length=100)
    portugues = models.CharField(max_length=100)
    dificuldade = models.CharField(max_length=10, choices=[('facil', 'Fácil'), ('medio', 'Médio'), ('dificil', 'Difícil')])

    def __str__(self):
        return self.ingles
