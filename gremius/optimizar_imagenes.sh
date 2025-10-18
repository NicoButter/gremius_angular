#!/bin/bash
# Script avanzado para optimización de imágenes
# Convierte PNG/JPG a WebP y optimiza tamaños
# Requiere: webp tools y imagemagick (sudo apt install webp imagemagick)

# Función de ayuda
mostrar_ayuda() {
    echo "Uso: $0 [OPCIONES]"
    echo ""
    echo "OPCIONES:"
    echo "  -q, --quality CALIDAD    Calidad WebP (1-100, default: 85)"
    echo "  -f, --format FORMATO     Formato de origen: png, jpg, all (default: all)"
    echo "  -d, --dry-run           Solo mostrar qué se haría, sin convertir"
    echo "  -o, --overwrite         Sobrescribir archivos WebP existentes"
    echo "  -h, --help              Mostrar esta ayuda"
    echo ""
    echo "Ejemplos:"
    echo "  $0                      # Convertir todo con calidad 85"
    echo "  $0 -q 90 -f png        # Solo PNG con calidad 90"
    echo "  $0 --dry-run           # Ver qué se convertiría"
}

# Valores por defecto
CALIDAD=85
FORMATO="all"
DRY_RUN=false
OVERWRITE=false

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        -q|--quality)
            CALIDAD="$2"
            shift 2
            ;;
        -f|--format)
            FORMATO="$2"
            shift 2
            ;;
        -d|--dry-run)
            DRY_RUN=true
            shift
            ;;
        -o|--overwrite)
            OVERWRITE=true
            shift
            ;;
        -h|--help)
            mostrar_ayuda
            exit 0
            ;;
        *)
            echo "❌ Opción desconocida: $1"
            mostrar_ayuda
            exit 1
            ;;
    esac
done

# Verificar dependencias
verificar_dependencias() {
    local faltan=""
    if ! command -v cwebp &> /dev/null; then
        faltan="$faltan cwebp"
    fi
    if ! command -v convert &> /dev/null; then
        faltan="$faltan imagemagick"
    fi

    if [ -n "$faltan" ]; then
        echo "❌ Faltan dependencias:$faltan"
        echo "Instala con: sudo apt install webp imagemagick"
        exit 1
    fi
}

# Función principal de conversión
convertir_imagenes() {
    local patron
    case $FORMATO in
        png) patron="*.png" ;;
        jpg) patron="*.jpg" ;;
        all) patron="*.[pj][np]g" ;;
        *) echo "❌ Formato no válido: $FORMATO"; exit 1 ;;
    esac

    echo "🔍 Buscando archivos $patron en src/assets..."
    local archivos=$(find src/assets -name "$patron" -type f 2>/dev/null)

    if [ -z "$archivos" ]; then
        echo "ℹ️  No se encontraron archivos $patron"
        return
    fi

    local contador=0
    local total=$(echo "$archivos" | wc -l)

    echo "📊 Encontrados: $total archivos"
    echo "🎯 Calidad WebP: $CALIDAD"
    echo ""

    # Usar un archivo temporal para evitar problemas con el contador en subshell
    local temp_file=$(mktemp)
    echo "$archivos" > "$temp_file"

    while IFS= read -r archivo; do
        [ -z "$archivo" ] && continue

        local archivo_webp="${archivo%.*}.webp"
        local nombre=$(basename "$archivo")

        # Verificar si existe y no queremos sobrescribir
        if [ -f "$archivo_webp" ] && [ "$OVERWRITE" = false ]; then
            if [ "$DRY_RUN" = true ]; then
                echo "⚠️  Saltaría: $nombre (WebP existe)"
            else
                echo "⚠️  Saltando: $nombre (WebP existe)"
            fi
            continue
        fi

        if [ "$DRY_RUN" = true ]; then
            echo "🔄 Convertiría: $archivo → $archivo_webp"
            contador=$((contador + 1))
        else
            if cwebp -quiet -q "$CALIDAD" "$archivo" -o "$archivo_webp" 2>/dev/null; then
                local tamano_original=$(stat -f%z "$archivo" 2>/dev/null || stat -c%s "$archivo" 2>/dev/null)
                local tamano_webp=$(stat -f%z "$archivo_webp" 2>/dev/null || stat -c%s "$archivo_webp" 2>/dev/null)
                local ahorro=$(( (tamano_original - tamano_webp) * 100 / tamano_original ))

                echo "✅ $nombre → ${nombre%.*}.webp (${ahorro}% ahorro)"
                contador=$((contador + 1))
            else
                echo "❌ Error: $nombre"
            fi
        fi
    done < "$temp_file"

    # Limpiar archivo temporal
    rm -f "$temp_file"    echo ""
    if [ "$DRY_RUN" = true ]; then
        echo "🎭 Modo simulación completado"
        echo "📊 Archivos que se convertirían: $contador"
    else
        echo "🎉 Conversión completada!"
        echo "📊 Archivos procesados: $contador"
    fi
}

# Ejecutar
verificar_dependencias
convertir_imagenes