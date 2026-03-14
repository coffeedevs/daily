import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getLangFromId, getSlugFromId } from '../../i18n/ui';
import type { APIContext } from 'astro';

export function getStaticPaths() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'es' } }];
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as string;
  const allBriefs = await getCollection('briefs');
  const briefs = allBriefs
    .filter((b) => getLangFromId(b.id) === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const titles: Record<string, string> = {
    en: 'The Morning Espresso',
    es: 'The Morning Espresso (Español)',
  };

  const descriptions: Record<string, string> = {
    en: 'Your shot-sized news for agentic coding',
    es: 'Tu dosis diaria de noticias sobre agentic coding',
  };

  return rss({
    title: titles[lang],
    description: descriptions[lang],
    site: context.site!,
    items: briefs.map((brief) => ({
      title: brief.data.title,
      pubDate: brief.data.date,
      description: brief.data.extract,
      link: `/${lang}/briefs/${getSlugFromId(brief.id)}`,
    })),
  });
}
