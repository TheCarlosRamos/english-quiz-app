import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from quiz.models import Palavra

palavras = [
    # Fácil
    ("apple", "maçã", "facil"),
    ("car", "carro", "facil"),
    ("book", "livro", "facil"),
    ("dog", "cachorro", "facil"),
    ("house", "casa", "facil"),

    # Médio
    ("window", "janela", "medio"),
    ("bottle", "garrafa", "medio"),
    ("bicycle", "bicicleta", "medio"),
    ("airport", "aeroporto", "medio"),
    ("garden", "jardim", "medio"),

    # Difícil
    ("knowledge", "conhecimento", "dificil"),
    ("development", "desenvolvimento", "dificil"),
    ("environment", "meio ambiente", "dificil"),
    ("achievement", "realização", "dificil"),
    ("responsibility", "responsabilidade", "dificil"),
]

for ingles, portugues, dificuldade in palavras:
    Palavra.objects.get_or_create(ingles=ingles, portugues=portugues, dificuldade=dificuldade)

print("Palavras populadas com sucesso!")
