import random
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Palavra

class PerguntaAPIView(APIView):
    def get(self, request):
        dificuldade = request.query_params.get('dificuldade', None)
        
        palavras = Palavra.objects.all()
        if dificuldade:
            palavras = palavras.filter(dificuldade=dificuldade)
        
        palavras = list(palavras)

        if len(palavras) < 3:
            return Response({"erro": "Você precisa ter pelo menos 3 palavras cadastradas para essa dificuldade."}, status=400)

        correta = random.choice(palavras)
        opcoes = random.sample([p.portugues for p in palavras if p != correta], 2)
        opcoes.append(correta.portugues)
        random.shuffle(opcoes)

        return Response({
            "pergunta": f"Qual o significado de '{correta.ingles}'?",
            "opcoes": opcoes,
            "correta": opcoes.index(correta.portugues)
        })
