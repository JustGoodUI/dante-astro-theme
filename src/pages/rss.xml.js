import rss from '@astrojs/rss';
import siteConfig from '../data/site-config.ts';
import { getPublishedPosts } from '../utils/data-utils.ts';

export async function GET(context) {
    const posts = await getPublishedPosts();
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/blog/${item.id}/`,
            pubDate: item.data.publishDate
        }))
    });
}
