from django.db import models

# users/models.py
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    is_affiliate = models.BooleanField(default=False)
    is_staff_member = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

class CarneAfiliado(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    numero_afiliado = models.CharField(max_length=100)
    caducidad = models.DateField()
    # Otros campos específicos del carné de afiliado

class Legajo(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    cargo = models.CharField(max_length=100)
    salario = models.DecimalField(max_digits=10, decimal_places=2)
    # Otros campos específicos del legajo de empleado
