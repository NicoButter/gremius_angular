from django.db import models

class InstitucionalContent(models.Model):
    CONTENT_TYPES = [
        ('autoridades', 'Autoridades'),
        ('estatuto', 'Estatuto'),
        ('reglamento_licencias', 'Reglamento de Licencias'),
        ('terminos_condiciones', 'Términos y Condiciones'),
        ('politica_privacidad', 'Política de Privacidad'),
        ('galeria', 'Galería'),
    ]

    title = models.CharField(max_length=200)
    content = models.TextField()
    content_type = models.CharField(max_length=50, choices=CONTENT_TYPES)
    # Puedes añadir más campos según sea necesario

    def __str__(self):
        return self.title
