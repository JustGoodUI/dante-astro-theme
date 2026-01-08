import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Daniel Pastor Redondo',
    subtitle: 'Automation Technician | PLC, SCADA, OPC UA & SQL Databases',
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
            text: 'Blog',
            href: '/blog'
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
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
    title: 'Carta de presentación',
    text:
    "Hola, soy **Daniel Pastor**.\n\n" +
    "Si algo me define es la **curiosidad**. Me encanta aprender, explorar **software y hardware nuevos**, descubrir cómo funcionan las cosas y experimentar con todo lo que sea nuevo conocimiento. Cada proyecto es para mí una oportunidad de crecer, de probar algo distinto y de encontrar soluciones creativas que realmente funcionen.\n\n" +
    "Más allá de la tecnología, valoro **trabajar en un buen ambiente**, rodeado de personas con las que se pueda colaborar, reír y aprender juntos. Me considero alguien **amigable, cercano y con ganas de aportar**, porque sé que los mejores resultados nacen cuando el equipo se siente cómodo y motivado.\n\n" +
    "Cuando no estoy entre cables y pantallas, soy **deportista**: me gusta mantener la energía, la disciplina y la mente clara, lo que también se refleja en mi manera de abordar los proyectos.\n\n" +
    "Si buscas a alguien que combine **pasión por aprender, curiosidad tecnológica y buena energía para el equipo**, aquí estoy.\n\n" +
    "📩 **Hablemos y compartamos ideas**.",
    image: {
      src: hero,
      alt: 'Daniel Pastor - Programador de Automatización'
    },
    actions: [
        {
        text: 'Ver proyectos',
        href: '/projects'
        },
        {
        text: 'Currículum',
        href: '/about'
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
