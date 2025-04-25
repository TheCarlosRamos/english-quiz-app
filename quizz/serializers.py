from rest_framework import serializers
from .models import Palavra
import random

class PalavraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Palavra
        fields = '__all__'

class QuizSerializer(serializers.Serializer):
    palavra = serializers.CharField()
    opcoes = serializers.ListField(child=serializers.CharField())
    correta = serializers.IntegerField()
