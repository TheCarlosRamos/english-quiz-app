from django.urls import path
from .import views

urlpatterns = [
    path('pergunta/', views.PerguntaAPIView.as_view(), name='pergunta'),
]
