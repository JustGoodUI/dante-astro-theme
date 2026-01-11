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

    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/daniel-pastor-redondo-49794a331/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/McJosebas'
        },
        {
            text: 'WebSite',
            href: 'https://mcjosebas.github.io/'
        }
    ],
    hero: {
    title: 'Carta de presentación',
    text:
    "Hola, soy **Daniel Pastor**.\n\n" +
    "Ingeniero en automatización y robótica industrial, con experiencia en el desarrollo de sistemas basados en **PLC, SCADA** y **arquitecturas de datos industriales**. Trabajo integrando software y hardware para mejorar procesos, fiabilidad y eficiencia en entornos industriales.\n\n" +
    "Me gusta entender cómo funciona cada sistema en profundidad, desde el control hasta la visualización y el tratamiento de datos, para diseñar **soluciones claras, robustas y fáciles de mantener**.\n\n" +
    "Disfruto colaborando en equipos técnicos donde el criterio, la comunicación y el aprendizaje continuo marcan la diferencia en el resultado final.\n\n" +
    "En este portfolio presento **proyectos reales, tecnologías con las que trabajo** y mi enfoque profesional en automatización industrial.\n\n" +
    "📩 **Si quieres comentar un proyecto o una colaboración, hablemos.**",
    //image: {
    //  src: hero,
    //  alt: 'Daniel Pastor - Programador de Automatización'
    //},
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
