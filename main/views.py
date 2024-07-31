from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def terminos_condiciones_view(request):
    return render(request, 'institucional/terminos_condiciones.html')

def politica_privacidad_view(request):
    return render(request, 'institucional/politica_privacidad.html')