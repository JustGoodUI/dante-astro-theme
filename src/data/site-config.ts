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
    title: 'Control, Visión e Integración IIoT.',
    text:
      "Hola, soy **Daniel**.\n\n" +
      "Soy un **Programador de PLC** apasionado por la innovación industrial, especializado en **Siemens (TIA Portal), Omron y Visión Artificial**.\n\n" +
      "No solo escribo código en **Ladder o SCL**; diseño soluciones completas que van desde el esquema eléctrico en **Eplan** hasta la integración de datos con **Node-RED y Python**.\n\n" +
      "Aquí encontrarás proyectos reales donde combino el control de movimiento (**Servos**) con sistemas de visión y conectividad **OPC UA**.\n\n" +
      "Si buscas a alguien curioso, ambicioso y capaz de unir el taller con la nube, bienvenido a mi portfolio.",
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
        text: 'Contacto',
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
