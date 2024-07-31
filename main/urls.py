from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Ruta para la página de inicio
    # path('institucional/', views.institucional_view, name='institucional'),  # Nueva ruta para la página Institucional
    path('terminos_condiciones/', views.terminos_condiciones_view, name='terminos_condiciones'),
    path('politica_privacidad/', views.politica_privacidad_view, name='politica_privacidad'),
]
