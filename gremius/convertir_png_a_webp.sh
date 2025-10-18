#!/bin/bash
# Convierte todos los PNG en src/assets a WebP
# Requiere: webp tools (sudo apt install webp)

# Verificar si cwebp está instalado
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp no está instalado."
    echo "Instálalo con: sudo apt install webp  (Ubuntu/Debian)"
    echo "O: brew install webp  (macOS)"
    exit 1
fi

# Verificar si existe el directorio src/assets
if [ ! -d "src/assets" ]; then
    echo "❌ Error: Directorio src/assets no encontrado."
    exit 1
fi

echo "🔄 Convirtiendo imágenes PNG a WebP..."

# Contador de archivos procesados
contador=0

# Convertir todos los PNG a WebP
find src/assets -name "*.png" -type f | while read -r archivo_png; do
    archivo_webp="${archivo_png%.png}.webp"

    # Verificar si el archivo WebP ya existe
    if [ -f "$archivo_webp" ]; then
        echo "⚠️  Saltando: $archivo_webp ya existe"
        continue
    fi

    # Convertir con cwebp
    if cwebp -quiet -q 85 "$archivo_png" -o "$archivo_webp"; then
        echo "✅ Convertido: $archivo_png → $archivo_webp"
        contador=$((contador + 1))
    else
        echo "❌ Error convirtiendo: $archivo_png"
    fi
done

echo ""
echo "🎉 Conversión completada!"
echo "📊 Archivos convertidos: $contador"
echo "💡 Recuerda actualizar las referencias en tu código HTML/CSS si es necesario."