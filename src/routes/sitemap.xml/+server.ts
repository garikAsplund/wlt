const site = 'https://wlt-git-main-garik-asplunds-projects.vercel.app';
const pageFiles = import.meta.glob('/src/routes/**/+page.svelte', { eager: true });
const pages = Object.keys(pageFiles)
        .map(path => {
            const match = path.match(/\/routes\/(.+?\/\+page\.svelte|\+page\.svelte)$/);
            return match ? (match[1] === '+page.svelte' ? '' : match[1].replace('/+page.svelte', '')) : null;
        })
        .filter(page => page !== null);

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
