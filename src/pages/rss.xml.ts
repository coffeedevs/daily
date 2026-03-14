import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const briefs = await getCollection('briefs');
  const sorted = briefs.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'The Morning Espresso',
    description: 'Your shot-sized news for agentic coding',
    site: context.site!,
    items: sorted.map((brief) => ({
      title: brief.data.title,
      pubDate: brief.data.date,
      description: brief.data.extract,
      link: `/briefs/${brief.id}`,
    })),
  });
}
