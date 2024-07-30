Gremius
Gremius es un sistema web diseñado para la administración de un gremio. Este proyecto permite a los visitantes explorar las últimas novedades y noticias, promociones y otros contenidos relevantes. Los afiliados pueden acceder al sistema utilizando sus credenciales y realizar reservas para diversos servicios que ofrece el gremio, como salones de eventos, parrillas y alquiler de departamentos en distintas localidades de la provincia de Santa Cruz, Argentina.

Características
Noticias y Novedades: Los visitantes pueden ver las últimas noticias y promociones del gremio.
Sistema de Reservas: Los afiliados pueden realizar reservas para los servicios del gremio.
Salón de eventos con comedor y parrilla.
Alquiler de departamentos en varias localidades.
Gestión de Afiliados: Registro y autenticación de afiliados para acceso a servicios exclusivos.
Tecnologías Utilizadas
Backend: Django
Base de Datos: PostgreSQL
Sistema Operativo: openSUSE
Requisitos
Python 3.x
Django
PostgreSQL
openSUSE
Instalación
Clonar el repositorio:

sh
Copiar código
git clone https://github.com/tu_usuario/gremius.git
cd gremius
Crear y activar un entorno virtual:

sh
Copiar código
python3 -m venv venv
source venv/bin/activate
Instalar las dependencias:

sh
Copiar código
pip install -r requirements.txt
Configurar la base de datos en settings.py:

python
Copiar código
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nombre_de_tu_base_de_datos',
        'USER': 'tu_usuario',
        'PASSWORD': 'tu_contraseña',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
Migrar la base de datos:

sh
Copiar código
python manage.py migrate
Crear un superusuario:

sh
Copiar código
python manage.py createsuperuser
Correr el servidor:

sh
Copiar código
python manage.py runserver
Uso
Acceder a la página principal en http://localhost:8000 para ver las noticias y promociones.
Iniciar sesión como afiliado para realizar reservas de servicios.
Contribución
Si deseas contribuir a Gremius, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
Sube los cambios a tu rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está licenciado bajo los términos de la licencia MIT. Ver el archivo LICENSE para más detalles.
