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
    "¿Trabajas en **Recursos Humanos**, eres **cliente**, **dueño de una empresa** o simplemente estás buscando un **perfil como el mío**?\n\n" +
    "La idea de esta web es **ponerte las cosas un poco más fáciles** a la hora de decidir si soy la persona adecuada para lo que estás buscando.\n\n" +
    "Elegir a alguien solo por su **currículum** puede ser arriesgado: no siempre muestra **cómo trabaja una persona** ni **de qué es realmente capaz**.\n\n" +
    "Con este **portafolio** no pretendo decir que sea mejor que otros candidatos, sino enseñarte con claridad **mi experiencia**, **mi recorrido profesional** y **los proyectos** en los que he trabajado.\n\n" +
    "Así podrás hacerte una mejor idea de **mi perfil** y tomar una decisión con **más información y menos incertidumbre**.",

    //image: {
    //  src: hero,
    //  alt: 'Daniel Pastor - Programador de Automatización'
    //},
    actions: [
        {
        text: 'Currículum',
        href: '/about'
        },
        {
        text: 'Ver proyectos',
        href: '/projects'
        }
    ]
    },
    
    subscribe: {
        enabled: false,
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
