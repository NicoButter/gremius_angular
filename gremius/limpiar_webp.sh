#!/bin/bash
# Script para limpiar archivos WebP generados
# Uso: ./limpiar_webp.sh [--dry-run]

DRY_RUN=false

if [ "$1" = "--dry-run" ]; then
    DRY_RUN=true
fi

echo "🗑️  Buscando archivos WebP en src/assets..."

archivos_webp=$(find src/assets -name "*.webp" -type f 2>/dev/null)
contador=$(echo "$archivos_webp" | wc -l)

if [ -z "$archivos_webp" ] || [ "$contador" -eq 0 ]; then
    echo "ℹ️  No se encontraron archivos WebP para eliminar"
    exit 0
fi

echo "📊 Encontrados: $contador archivos WebP"
echo ""

if [ "$DRY_RUN" = true ]; then
    echo "🎭 MODO SIMULACIÓN - Estos archivos se eliminarían:"
    echo "$archivos_webp" | while read -r archivo; do
        echo "🗑️  $archivo"
    done
    echo ""
    echo "💡 Ejecuta sin --dry-run para eliminar realmente"
else
    echo "$archivos_webp" | while read -r archivo; do
        if rm "$archivo"; then
            echo "✅ Eliminado: $archivo"
        else
            echo "❌ Error eliminando: $archivo"
        fi
    done
    echo ""
    echo "🎉 Limpieza completada!"
fi

echo "📊 Total procesados: $contador"