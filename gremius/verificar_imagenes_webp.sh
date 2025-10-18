#!/bin/bash
# Script para verificar que todas las imágenes WebP referenciadas existen
# Útil después de actualizar referencias para asegurar que no hay enlaces rotos

echo "🔍 Verificando que todas las imágenes WebP referenciadas existen..."

errores=0
total_verificados=0

# Función para verificar si un archivo existe
verificar_imagen() {
    local ruta="$1"
    total_verificados=$((total_verificados + 1))

    # Remover comillas si existen
    ruta=$(echo "$ruta" | sed 's/^['\''"]//' | sed 's/['\''"]$//')

    # Convertir ruta relativa a absoluta
    if [[ "$ruta" == assets/* ]]; then
        ruta="src/$ruta"
    fi

    if [ ! -f "$ruta" ]; then
        echo "❌ No existe: $ruta"
        errores=$((errores + 1))
    else
        echo "✅ Existe: $ruta"
    fi
}

# Buscar todas las referencias a archivos WebP en archivos TypeScript
echo "📄 Buscando referencias en archivos TypeScript..."
webps_encontrados=$(grep -r "\.webp" src/app/ --include="*.ts" | grep -o "assets/[^'\"]*\.webp" | sort | uniq)

echo "🔍 Verificando $(echo "$webps_encontrados" | wc -l) imágenes WebP únicas..."
echo ""

echo "$webps_encontrados" | while read -r imagen; do
    [ -z "$imagen" ] && continue
    verificar_imagen "$imagen"
done

echo ""
echo "📊 Resumen:"
echo "   🔍 Archivos verificados: $total_verificados"
echo "   ❌ Errores encontrados: $errores"

if [ $errores -eq 0 ]; then
    echo "🎉 ¡Todas las imágenes WebP existen!"
    exit 0
else
    echo "⚠️  Se encontraron $errores imágenes faltantes"
    exit 1
fi