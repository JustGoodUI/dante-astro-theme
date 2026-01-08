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
  title: 'Automatización industrial, bien hecha.',
  text:
    "Hola, soy **José**.\n\n" +
    "Trabajo en **automatización industrial**, desarrollando soluciones con **PLC, SCADA, OPC UA y bases de datos**.\n\n" +
    "Me gusta construir sistemas claros, fiables y bien integrados, donde el control, la visualización " +
    "y los datos encajan de forma natural.\n\n" +
    "En este espacio comparto algunos de los proyectos en los que he trabajado: " +
    "desde lógica de control hasta integración IT/OT y explotación de datos industriales.\n\n" +
    "Si te interesa cómo llevo una idea desde el PLC hasta la base de datos, estás en el sitio correcto.",
  image: {
    src: hero,
    alt: 'Entorno de trabajo de automatización industrial'
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
