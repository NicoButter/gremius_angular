function mostrarSede(sedeId) {
  // Obtén el contenedor de información de la sede
  const infoContainer = document.getElementById("informacion-sede");

  const mapas = {
    sede1:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.098171059772!2d-69.21955122265673!3d-51.62801884179836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb6f959e63ee995%3A0x6a6df6e7d63e8db1!2sRam%C3%B3n%20y%20Cajal%20257%2C%20Z9400%20R%C3%ADo%20Gallegos%2C%20Santa%20Cruz!5e1!3m2!1ses!2sar!4v1730401493765!5m2!1ses!2sar",
    sede2:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12509.27098106777!2d-72.29552639990553!3d-50.330061841789735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb0cc7837a0649%3A0x3f1d24e5009b8dd9!2sAv.%20Costanera%20Pres.%20N%C3%A9stor%20Carlos%20Kirchner%2C%20Z9405%2C%20Santa%20Cruz!5e1!3m2!1ses!2sar!4v1730401942161!5m2!1ses!2sar",
    sede3:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.452379568493!2d-67.72066092277288!3d-49.317729174525304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdc402a695823fcb%3A0x2baaeec798617901!2s9%20de%20Julio%201186%2C%20Puerto%20San%20Julian%2C%20Santa%20Cruz!5e1!3m2!1ses!2sar!4v1730402210918!5m2!1ses!2sar",
    sede4:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.439610135546!2d-67.53266132291307!3d-46.4319141738599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5dfb6ae69e6c1%3A0xde248f5b6b47a5c8!2sVenezuela%20630%2C%20Z9011%20Caleta%20Olivia%2C%20Santa%20Cruz!5e1!3m2!1ses!2sar!4v1730402291797!5m2!1ses!2sar"
    }
    
  // Definir información de las sedes incluyendo la imagen
  const sedes = {
    sede1: {
      nombre: "Sede Central Río Gallegos",
      descripcion: "Aquí se encuentran nuestras oficinas administrativas.",
      direccion: "Ramon y Cajal 257",
      telefono: "(02966) 340743",
      horarios: "9 a 12 y 15 a 20hs",
      responsable: "Diana Climis",
      imagen: "assets/images/sede_rio_gallegos.png", // Ruta de la imagen
    },
    sede2: {
      nombre: "El Calafate",
      descripcion: "Sede secundaria para atención al público.",
      direccion: "Avda. Costanera Néstor Kirchner 134",
      telefono: "(02966) 340743",
      horarios: "9 a 12 y 15 a 20hs",
      responsable: "Diana Climis",
      imagen: "assets/images/sede_el_calafate.png", // Ruta de la imagen
    },
    sede3: {
      nombre: "San Julian",
      descripcion: "Centro de formación profesional.",
      direccion: "9 de Julio 1186",
      telefono: "(02966) 707561",
      horarios: "8 a 10 y 16 a 19hs",
      responsable: "Antonia Méndez",
      imagen: "assets/images/sede_san_julian.png", // Ruta de la imagen
    },
    sede4: {
      nombre: "Caleta Olivia",
      descripcion: "Capacitación y desarrollo profesional.",
      direccion: "Venezuela 630",
      telefono: "(02966) 406-101",
      horarios: "10 a 12 y 16 a 19hs",
      responsable: "José Morodiel",
      mapa: "https://www.google.com/maps/embed?pb=!1m18...",
      imagen: "assets/images/sede_caleta_olivia.png", // Ruta de la imagen
    },
  };

  // Obtener la información de la sede seleccionada
  const sede = sedes[sedeId];

  // Muestra la información de la sede seleccionada
  if (sede) {
    infoContainer.innerHTML = `
        <h3>${sede.nombre}</h3>
        <img src="${sede.imagen}" alt="${sede.nombre}" style="max-width: 100%; border-radius: 8px; margin-bottom: 10px;">
        <p>${sede.descripcion}</p>
        <p>Dirección: ${sede.direccion}</p>
        <p>Teléfono: ${sede.telefono}</p>
        <p>Horarios: ${sede.horarios}</p>
        <p>Responsable: ${sede.responsable}</p>
        <iframe src="${mapas[sedeId]}" style="border:0; width: 100%; height: 300px;" allowfullscreen="" loading="lazy"></iframe>
    `;
    infoContainer.style.display = "block";
  } else {
    infoContainer.innerHTML = "";
    infoContainer.style.display = "none";
  }
}
