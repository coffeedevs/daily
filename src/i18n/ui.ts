export const languages = { en: 'English', es: 'Español' };
export const defaultLang = 'en';

export const ui = {
  en: {
    'site.tagline': 'Your shot-sized news for agentic coding',
    'nav.latest': 'Latest Briefs',
    'nav.readMore': 'Read more →',
    'nav.back': '← Back to all briefs',
    'nav.prev': '← Previous',
    'nav.next': 'Next →',
    'newsletter.title': 'Stay caffeinated',
    'newsletter.desc': 'Get the daily brief delivered to your inbox every morning.',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.button': 'Subscribe',
    'newsletter.disclaimer': 'No spam. Unsubscribe anytime.',
    'newsletter.success': 'Welcome aboard! Check your inbox.',
    'newsletter.existing': "You're already subscribed!",
    'newsletter.error': 'Something went wrong. Try again.',
  },
  es: {
    'site.tagline': 'Tu dosis diaria de noticias sobre agentic coding',
    'nav.latest': 'Últimos Briefs',
    'nav.readMore': 'Leer más →',
    'nav.back': '← Volver a todos los briefs',
    'nav.prev': '← Anterior',
    'nav.next': 'Siguiente →',
    'newsletter.title': 'Mantente al día',
    'newsletter.desc': 'Recibí el brief diario en tu inbox cada mañana.',
    'newsletter.placeholder': 'tu@email.com',
    'newsletter.button': 'Suscribirse',
    'newsletter.disclaimer': 'Sin spam. Cancelá cuando quieras.',
    'newsletter.success': 'Bienvenido/a. Revisá tu inbox.',
    'newsletter.existing': 'Ya estás suscripto/a.',
    'newsletter.error': 'Algo salió mal. Intentá de nuevo.',
  },
} as const;

export function t(lang: string, key: string): string {
  return ui[lang as keyof typeof ui]?.[key as keyof (typeof ui)['en']] ?? key;
}

export function getLangFromId(id: string): string {
  return id.startsWith('es/') ? 'es' : 'en';
}

export function getSlugFromId(id: string): string {
  return id.replace(/^(en|es)\//, '');
}
