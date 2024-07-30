# Gremius

Gremius es un sistema web diseñado para la administración de un gremio. Este proyecto permite a los visitantes explorar las últimas novedades y noticias, promociones y otros contenidos relevantes. Los afiliados pueden acceder al sistema utilizando sus credenciales y realizar reservas para diversos servicios que ofrece el gremio, como salones de eventos, parrillas y alquiler de departamentos en distintas localidades de la provincia de Santa Cruz, Argentina.

## Características

- **Noticias y Novedades:** Los visitantes pueden ver las últimas noticias y promociones del gremio.
- **Sistema de Reservas:** Los afiliados pueden realizar reservas para los servicios del gremio.
  - Salón de eventos con comedor y parrilla.
  - Alquiler de departamentos en varias localidades.
- **Gestión de Afiliados:** Registro y autenticación de afiliados para acceso a servicios exclusivos.

## Tecnologías Utilizadas

- **Backend:** Django
- **Base de Datos:** PostgreSQL
- **Sistema Operativo:** openSUSE

## Requisitos

- Python 3.x
- Django
- PostgreSQL
- openSUSE

## Instalación

1. Clonar el repositorio:

    ```sh
    git clone https://github.com/tu_usuario/gremius.git
    cd gremius
    ```

2. Crear y activar un entorno virtual:

    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Instalar las dependencias:

    ```sh
    pip install -r requirements.txt
    ```

4. Configurar la base de datos en `settings.py`:

    ```python
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
    ```

5. Migrar la base de datos:

    ```sh
    python manage.py migrate
    ```

6. Crear un superusuario:

    ```sh
    python manage.py createsuperuser
    ```

7. Correr el servidor:

    ```sh
    python manage.py runserver
    ```

## Uso

- Acceder a la página principal en `http://localhost:8000` para ver las noticias y promociones.
- Iniciar sesión como afiliado para realizar reservas de servicios.

## Contacto

Si tienes alguna pregunta o deseas contactarme, puedes enviarme un correo a [nicobutter@gmail.com](mailto:nicobutter@gmail.com).

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Ver el archivo `LICENSE` para más detalles.

