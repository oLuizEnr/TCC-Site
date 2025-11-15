from django.db import models

# Create your models here.
class Dados(models.Model):
    freqCardi = models.CharField(max_length=5)
    presCardi = models.CharField(max_length=5)
    oxigenacao = models.CharField(max_length=5)
    leitura_h = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Na data {self.leitura_h}, Frequência cardíaca: {self.freqCardi}, Pressão cardíaca: {self.freqCardi} e Oxigenação: {self.oxigenacao}"