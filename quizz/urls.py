from django.urls import path
from .views import PerguntaAPIView

urlpatterns = [
    path('pergunta/', PerguntaAPIView.as_view()),
]
