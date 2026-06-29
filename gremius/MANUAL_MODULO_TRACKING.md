# Manual de uso del módulo Tracking

## 1. Objetivo

El módulo `tracking` permite transmitir la ubicación en tiempo real de la comisión desde un dispositivo móvil y visualizarla desde una página pública.

Funciona con dos vistas:

- **Panel privado de transmisión**: `comision-tracking`
- **Mapa público de consulta**: `mapa-comision`

La información se guarda en Firebase Realtime Database bajo la ruta `tracking/current`.

## 2. Requisitos

Antes de usar el módulo, verificar lo siguiente:

- Tener conexión a internet.
- Tener permisos de ubicación/GPS habilitados en el dispositivo.
- Usar un navegador compatible con geolocalización.
- Contar con credenciales válidas de Firebase Auth para acceder al panel privado.

## 3. Panel privado de transmisión

Ruta: `/comision-tracking`

Esta pantalla está pensada para usarla desde el celular o dispositivo que acompaña a la comisión durante el viaje.

### 3.1 Acceso

1. Ingresar a la ruta `/comision-tracking`.
2. Presionar **Iniciar transmision**.
3. Completar el formulario de acceso con:
   - Email
   - Contraseña
4. Presionar **Ingresar**.

Si las credenciales son correctas, se habilita el panel de transmisión.

### 3.2 Configuración del viaje

En el panel privado se deben completar dos datos principales:

- **Destino**: se selecciona desde una lista predefinida.
- **Mensaje visible**: texto que se mostrará en el mapa público.

El campo de mensaje se actualiza manualmente o puede autogenerarse con el destino seleccionado.

### 3.3 Iniciar transmisión

1. Revisar que el GPS del dispositivo esté activo.
2. Presionar **Activar GPS**.
3. Aceptar el permiso de ubicación si el navegador lo solicita.

Cuando la transmisión comienza:

- El sistema escucha la ubicación en forma continua.
- Cada nueva posición se guarda en Firebase.
- El mapa interno del panel se centra sobre la ubicación actual del dispositivo.

### 3.4 Finalizar transmisión

1. Presionar **Finalizar**.
2. El sistema detiene el seguimiento GPS.
3. Se guarda el último estado con `active = false`.

Esto deja constancia de que la comisión ya no está transmitiendo un viaje activo.

## 4. Mapa público

Ruta: `/mapa-comision`

Esta vista es de consulta pública. No requiere autenticación.

### 4.1 Qué muestra

El mapa público presenta:

- Ubicación actual de la comisión.
- Destino informado.
- Última actualización recibida.
- Coordenadas actuales.
- Estado de la transmisión.

### 4.2 Interpretación del estado

El sistema considera la información como desactualizada cuando pasan más de 3 minutos sin recibir una nueva ubicación.

En ese caso:

- el indicador cambia a estado fuera de línea;
- el texto visible muestra la última referencia registrada.

### 4.3 Primer ingreso

Si todavía no se publicó ninguna ubicación, la vista mostrará que no hay datos disponibles.

## 5. Flujo completo de uso

1. Abrir `/comision-tracking`.
2. Iniciar sesión con credenciales autorizadas.
3. Elegir el destino del viaje.
4. Escribir o confirmar el mensaje de estado.
5. Presionar **Activar GPS**.
6. Verificar que el mapa privado comience a seguir la ubicación.
7. Mantener el dispositivo con señal y permisos de GPS activos durante todo el trayecto.
8. Al finalizar, presionar **Finalizar**.
9. La vista pública `/mapa-comision` reflejará el estado transmitido.

## 6. Datos que publica el sistema

Cada actualización enviada a Firebase incluye:

- `active`: indica si la transmisión está activa.
- `lat`: latitud.
- `lng`: longitud.
- `destination`: destino seleccionado.
- `status`: mensaje visible para el público.
- `updatedAt`: fecha y hora de actualización.
- `accuracy`: precisión reportada por el GPS.
- `heading`: rumbo del dispositivo, si está disponible.
- `speed`: velocidad del dispositivo, si está disponible.

## 7. Buenas prácticas de operación

- Mantener el navegador en primer plano para no perder la lectura de GPS.
- Evitar cerrar la pestaña durante la transmisión.
- Verificar batería suficiente antes de iniciar el recorrido.
- Confirmar que el dispositivo tenga permisos de ubicación configurados como permanentes o permitidos durante el uso.
- Comprobar que el mensaje visible sea claro y coherente con el destino real.

## 8. Resolución de problemas

### 8.1 Error de acceso

Si aparece un mensaje de email o contraseña incorrectos:

- verificar las credenciales;
- revisar que el usuario exista en Firebase Auth;
- intentar nuevamente desde el modal de acceso.

### 8.2 No se obtiene la ubicación

Si el sistema informa que no puede obtener la ubicación:

- revisar que el GPS esté activado;
- aceptar permisos de ubicación en el navegador;
- comprobar que el dispositivo tenga señal satelital o conexión suficiente para geolocalización.

### 8.3 No se guarda la ubicación

Si la app obtiene GPS pero no actualiza Firebase:

- verificar conectividad a internet;
- confirmar que el proyecto de Firebase esté disponible;
- reintentar la transmisión.

### 8.4 El mapa no carga

Si el mapa no se renderiza:

- revisar la conexión;
- recargar la página;
- volver a ingresar al panel o al mapa público.

## 9. Observaciones técnicas

- El mapa usa OpenStreetMap como base cartográfica.
- El centro inicial del mapa está configurado sobre Santa Cruz.
- La persistencia de datos depende de Firebase Realtime Database.
- El acceso privado usa Firebase Authentication.

