from django.db import models

class Palavra(models.Model):
    palavra_ingles = models.CharField(max_length=100)
    significado_portugues = models.CharField(max_length=100)

    def __str__(self):
        return self.palavra_ingles
