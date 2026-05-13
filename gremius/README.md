# Gremius

Este es el sitio web oficial de Gremius, desarrollado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.1. Con soporte para Server-Side Rendering (SSR) y optimización avanzada de recursos.

## 🚀 Características Principales

- **Angular 18**: Implementación con las últimas funcionalidades de Angular.
- **Server-Side Rendering (SSR)**: Optimizado para SEO y rendimiento inicial.
- **Email Integration**: Sistema de contacto integrado con `@emailjs/browser`.
- **Estructura Modular**: Componentes organizados por secciones (Secretarías, Sedes, Beneficios, etc.).
- **Optimización de Imágenes**: Sistema de scripts para conversión y gestión de activos WebP.

## 🛠️ Desarrollo y Comandos

### Servidor de Desarrollo
Ejecuta `ng serve` para iniciar un servidor local. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

### Build (Producción)
Ejecuta `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

### Server-Side Rendering (SSR)
Para servir la aplicación con SSR:
```bash
npm run serve:ssr:gremius
```

## 🖼️ Optimización de Imágenes

El proyecto incluye herramientas para mejorar el rendimiento web mediante el uso de formato WebP:

- `optimizar_imagenes.sh`: Script principal para conversión por lotes (PNG/JPG a WebP).
- `actualizar_referencias_webp.sh`: Actualiza automáticamente las rutas en archivos `.html`, `.css` y `.ts`.
- `limpiar_webp.sh`: Elimina versiones WebP generadas.
- `verificar_imagenes_webp.sh`: Comprueba si existen versiones WebP para todas las imágenes.
- `mover_imagenes_no_webp.sh`: Mueve activos antiguos a un directorio de respaldo.

Para más detalles, consulta [IMAGENES_README.md](IMAGENES_README.md).

## 🧪 Pruebas

### Pruebas Unitarias
Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

### Pruebas End-to-End
Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo.

## 📄 Licencia

Este proyecto es de uso privado para Gremius.
