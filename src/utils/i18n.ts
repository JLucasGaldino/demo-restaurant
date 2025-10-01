export const languages = {
  es: 'Español',
  en: 'English'
} as const;

export const defaultLang = 'es';

export type Language = keyof typeof languages;

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.events': 'Eventos',
    'nav.reservation': 'Reservación',
    'nav.contact': 'Contacto',
    'btn.contact': 'Contáctanos',
    // Add more as needed
    'btn.maps' : 'Abrir Mapas',
    'hom.learn' : 'Ver más',
    'con.social' : 'Conectate',
    'con.title' : 'Contáctanos',
    'con.shop' : 'Tienda',
    'con.pickup' : 'Recogida',
    'con.location' : 'Ubicación',
    'con.legal' : 'Legal',
    'con.tnc' : 'Términos y condiciones',
    'con.pp' : 'Política de privacidad',
  },
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.events': 'Events',
    'nav.reservation': 'Reservation',
    'nav.contact': 'Contact',
    'btn.contact': 'Contact us',
    'btn.maps' : 'Open Maps',
    'hom.learn' : 'Learn More',
    'con.social' : 'Connect',
    'con.title' : 'Get in touch',
    'con.shop' : 'Shop',
    'con.pickup' : 'Pickup',
    'con.location' : 'Location',
    'con.legal' : 'Legal',
    'con.tnc' : 'Terms & condition',
    'con.pp' : 'Privacy policy',
  }
} as const;

// Helper function to get translations
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
