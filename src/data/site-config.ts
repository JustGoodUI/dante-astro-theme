
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://dheirylopez.github.io/',

    title: 'Dante',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Linkedin',
            href: 'www.linkedin.com/in/dheiry-lopez-22665aa0'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Linkedin',
            href: 'www.linkedin.com/in/dheiry-lopez-22665aa0'
        },
        {
            text: 'Github',
            href: 'https://github.com/dheirylopez'
        }

    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'www.linkedin.com/in/dheiry-lopez-22665aa0'
        },
        {
            text: 'Github',
            href: 'https://github.com/dheirylopez'
        },
        {
            text: 'Upwork',
            href: 'https://www.upwork.com/freelancers/~01d1eb273b35ecee7c?s=1110580753069494272'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/lopezdheiry?igsh=YmRjd3NxNmloZW5o&utm_source=qr'
        }
    ],
    hero: {
        title: 'Hello & Welcome! Explore My Software Projects!',
        text: `Hi, I’m Dheiry López, a Senior Software Engineer with 7+ years of experience delivering scalable software solutions and supporting cross-functional project execution.

         My background includes designing and developing enterprise applications, building RESTful APIs, contributing to microservices architectures, supporting AWS-based environments, and developing RPA bots with Automation Anywhere to streamline repetitive business processes and increase operational efficiency.

         I’ve worked across industries including energy, HR/payroll, healthcare manufacturing, and technology, which has given me the adaptability to understand new domains quickly and develop practical solutions for diverse business needs.

         Today, I’m focused on helping companies and clients build software and automation solutions that are clean, maintainable, user-centered, and capable of driving long-term impact.`,


        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
