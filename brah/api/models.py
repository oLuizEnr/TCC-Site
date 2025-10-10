from django.db import models

# Create your models here.
class Dados(models.Model):
    freqCardi = models.CharField()
    presCardi = models.CharField()
    oxigenacao = models.CharField()
    leitura_h = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Na data ${leitura_h}, Frequência cardíaca: {freqCardi}, Pressão cardíaca: {freqCardi} e Oxigenação: {oxigenacao}"