from django.db import models

# Create your models here.
class Auto(models.Model):
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(upload_to='autos/', null=True, blank=True)  # Agrega este campo

    def __str__(self):
        return f"{self.marca} {self.modelo} ({self.year}) {self.precio}"