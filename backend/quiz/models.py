from django.db import models

class Palavra(models.Model):
    ingles = models.CharField(max_length=100)
    portugues = models.CharField(max_length=100)

    def __str__(self):
        return self.ingles
