#!/bin/bash
# Script para mover todas las imágenes no WebP a un directorio de respaldo externo
# Mantiene la estructura de directorios relativa

# Directorio de respaldo (fuera del proyecto)
BACKUP_DIR="$HOME/imagenes_backup_proyecto_gremius_$(date +%Y%m%d_%H%M%S)"

echo "📁 Creando directorio de respaldo: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

echo "🔍 Buscando imágenes no WebP en src/assets..."

# Encontrar todos los archivos de imagen que no sean WebP
imagenes_a_mover=$(find src/assets -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.svg" \) 2>/dev/null)

total_archivos=$(echo "$imagenes_a_mover" | wc -l)

if [ -z "$imagenes_a_mover" ] || [ "$total_archivos" -eq 0 ]; then
    echo "ℹ️  No se encontraron imágenes no WebP para mover"
    exit 0
fi

echo "📊 Encontrados: $total_archivos archivos para mover"
echo ""

contador=0
echo "$imagenes_a_mover" | while read -r archivo; do
    [ -z "$archivo" ] && continue

    # Crear la estructura de directorios relativa en el backup
    # Remover 'src/assets' del path y crear la ruta relativa
    ruta_relativa=$(echo "$archivo" | sed 's|^src/assets/||')
    directorio_destino="$BACKUP_DIR/$(dirname "$ruta_relativa")"

    # Crear directorio si no existe
    mkdir -p "$directorio_destino"

    # Mover el archivo
    if mv "$archivo" "$directorio_destino/"; then
        echo "✅ Movido: $archivo → $directorio_destino/"
        contador=$((contador + 1))
    else
        echo "❌ Error moviendo: $archivo"
    fi
done

echo ""
echo "🎉 Movimiento completado!"
echo "📊 Archivos movidos: $contador"
echo "📁 Directorio de respaldo: $BACKUP_DIR"
echo ""
echo "💡 Para restaurar archivos: cp -r $BACKUP_DIR/* src/assets/"
echo "⚠️  Los archivos originales ya no están en el proyecto"