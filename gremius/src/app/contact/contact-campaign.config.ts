export type ContactCampaignType = 'job_application';

export interface ContactCampaignConfig {
  enabled: boolean;
  type: ContactCampaignType;
  /** Identificador de la sede configurado en el componente de contacto. */
  office: string;
  officeName: string;
  position: string;
  title: string;
  description: string;
  campaignKey: string;
  resume: {
    allowedExtensions: readonly string[];
    allowedMimeTypes: readonly string[];
    maxSizeBytes: number;
  };
}

/**
 * Campañas temporales de contacto.
 *
 * Para cerrar esta convocatoria basta con cambiar `enabled` a `false`.
 * La página /contact volverá a mostrar únicamente su flujo habitual.
 *
 * El estado de la campaña también se valida del lado servidor para que un
 * cliente no pueda crear postulaciones al modificar el código del navegador.
 */
export const CONTACT_CAMPAIGN: ContactCampaignConfig = {
  enabled: true,
  type: 'job_application',
  office: 'rio-gallegos',
  officeName: 'Río Gallegos',
  position: 'Personal administrativo',
  title: 'Búsqueda de personal administrativo',
  description: 'Estamos incorporando personal administrativo para nuestra sede de Río Gallegos.',
  campaignKey: 'administrativo-rg-2026',
  resume: {
    allowedExtensions: ['pdf'],
    allowedMimeTypes: ['application/pdf'],
    maxSizeBytes: 3 * 1024 * 1024
  }
};
