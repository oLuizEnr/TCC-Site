from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Dados
from .serializers import DadosSerializer

# Requisitar e enviar dados
@api_view(['POST'])
def receber_dados_esp(request):
    serializer = DadosSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Leitura registrada com sucesso!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def enviar_dados_front(request):
    dados = Dados.objects.all().order_by('-leitura_h')[:20]
    serializer = DadosSerializer(dados, many=True)
    return Response(serializer.data)