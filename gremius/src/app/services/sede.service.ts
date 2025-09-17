import { Injectable } from '@angular/core';

export interface Sede {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  mapIframeUrl: string;
  images: string[];
  videos: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SedesService {
  private sedes: Sede[] = [
    {
      id: 'sede1',
      name: 'Sede Central Río Gallegos',
      image: 'assets/images/sede_rio_gallegos_2.png',
      description: 'Nuestra sede principal en Río Gallegos ofrece servicios administrativos y de capacitación.',
      address: 'Ramón y Cajal 257, Río Gallegos, Santa Cruz',
      mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.6214862671156!2d-69.2163383983986!3d-51.628563641653436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb6f959e5cfffff%3A0x7708da357b12f17e!2sQuincho%20de%20Judiciales!5e0!3m2!1ses!2sar!4v1755098854211!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
      images: ['assets/images/sede_rio_gallegos.png', 'assets/images/sede_rio_gallegos_2.png'],
      videos: ['https://www.youtube.com/embed/VIDEO_ID_1'],
    },
    {
      id: 'sede2',
      name: 'Sede El Calafate',
      image: 'assets/images/sede_el_calafate.png',
      description: 'La sede de El Calafate está enfocada en actividades culturales y de inclusión.',
      address: 'Calle Los Glaciares 456, El Calafate, Santa Cruz',
      mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304077.025895104!2d-74.57511890625001!3d-50.328776600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb0d00125c6d9d%3A0xa87108c486445307!2sGremio%20Judicial%20%E2%80%9C3%20de%20julio%E2%80%9D%20(Sede%20El%20Calafate)!5e0!3m2!1ses!2sar!4v1755114200780!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      images: ['assets/images/sede_el_calafate_1.png', 'assets/images/sede_el_calafate_2.png', 'assets/images/sede_el_calafate_2.png'],
      videos: ['https://www.youtube.com/embed/X0PgSGNhctY'],
    },
    {
      id: 'sede3',
      name: 'Sede San Julián',
      image: 'assets/images/sede_san_julian.png',
      description: 'Sede dedicada a programas de capacitación y eventos comunitarios.',
      address: 'Av. 9 de Julio 789, San Julián, Santa Cruz',
      mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.456!2d-67.730!3d-49.306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDkuMzA2LCAtNjcuNzMw!5e0!3m2!1sen!2sar!4v1631234567892!5m2!1sen!2sar<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.6754817200838!2d-67.71652504277236!3d-49.31483291574104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdc4037c0b494ce1%3A0x5d2ac3c95805117d!2sLounge%20Quincho%20de%20Judiciales!5e0!3m2!1ses!2sar!4v1755114513291!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      images: ['assets/images/sede_san_julian_1.png', 'assets/images/sede_san_julian_2.png'],
      videos: ['https://www.youtube.com/embed/9Ayupbb4l4Y'],
    },
    {
      id: 'sede4',
      name: 'Sede Caleta Olivia',
      image: 'assets/images/sede_caleta_olivia.png',
      description: 'Sede enfocada en servicios laborales y beneficios para afiliados.',
      address: 'Venezuela 630, Caleta Olivia, Santa Cruz',
      mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.789!2d-67.531!3d-46.439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDYuNDM5LCAtNjcuNTMx!5e0!3m2!1sen!2sar!4v1631234567893!5m2!1sen!2sar',
      images: ['assets/images/sede_caleta_olivia_1.png', 'assets/images/sede_caleta_olivia_2.png', 'assets/images/sede_caleta_olivia_3.png'],
      videos: ['https://www.youtube.com/embed/VIDEO_ID_4'],
    },
  ];

  getSedes(): Sede[] {
    return this.sedes;
  }

  getSedeById(id: string): Sede | undefined {
    return this.sedes.find((sede) => sede.id === id);
  }
}