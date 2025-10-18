#!/bin/bash
# Script para actualizar referencias de imágenes PNG a WebP en archivos TypeScript
# Útil después de convertir imágenes para actualizar automáticamente las referencias

echo "🔍 Buscando referencias a archivos PNG en archivos TypeScript..."

# Buscar archivos .ts que contengan referencias a .png
archivos_ts=$(find src -name "*.ts" -type f -exec grep -l "\.png" {} \; 2>/dev/null)

if [ -z "$archivos_ts" ]; then
    echo "ℹ️  No se encontraron archivos TypeScript con referencias a .png"
    exit 0
fi

echo "📝 Archivos encontrados:"
echo "$archivos_ts" | while read -r archivo; do
    echo "  📄 $archivo"
done

echo ""
echo "🔄 Actualizando referencias PNG → WebP..."

contador=0
echo "$archivos_ts" | while read -r archivo; do
    # Crear backup del archivo original
    cp "$archivo" "${archivo}.backup"

    # Reemplazar .png por .webp en las rutas de assets
    sed -i 's|assets/[^"]*\.png|assets/&|g; s|\.png|\.webp|g' "$archivo"

    # Verificar si el archivo cambió
    if ! diff -q "$archivo" "${archivo}.backup" >/dev/null; then
        echo "✅ Actualizado: $archivo"
        contador=$((contador + 1))
    else
        # Restaurar backup si no cambió
        mv "${archivo}.backup" "$archivo"
    fi
done

echo ""
echo "🎉 Actualización completada!"
echo "📊 Archivos actualizados: $contador"
echo ""
echo "💡 Nota: Se crearon archivos .backup por si necesitas revertir los cambios"
echo "   Para revertir: mv archivo.ts.backup archivo.ts"