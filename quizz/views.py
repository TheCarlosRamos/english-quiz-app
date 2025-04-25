from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Palavra
from .serializers import QuizSerializer
import random

class PerguntaAPIView(APIView):
    def get(self, request):
        palavras = list(Palavra.objects.all())
        correta = random.choice(palavras)
        erradas = random.sample([p for p in palavras if p != correta], 2)
        opcoes = [correta.significado_portugues] + [e.significado_portugues for e in erradas]
        random.shuffle(opcoes)
        return Response({
            "palavra": correta.palavra_ingles,
            "opcoes": opcoes,
            "correta": opcoes.index(correta.significado_portugues)
        })

