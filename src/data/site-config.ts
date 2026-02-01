import Dami from '../assets/images/dam-wm.png';
import Gey from '../assets/images/gey.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: Dami,
        alt: 'Ethan Donovan'
    },
    title: 'Damian Alejandro Gey',
    subtitle: 'Here it is my personal blog 💻🚀',
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
            text: 'Github',
            href: 'https://github.com/DamianCode28'
        }
    ],
    footerNavLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/damian-gey/'
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
   
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "Soy desarrollador Front End con más de 3 años de experiencia creando interfaces que no solo se ven bien, sino que se sienten bien al usarlas. Me motiva transformar ideas en experiencias digitales claras, intuitivas y atractivas, cuidando cada detalle visual y funcional.Trabajé en distintos proyectos donde pude crecer, adaptarme y aportar valor, entendiendo que el Front End no es solo código, sino comunicación, diseño y empatía con el usuario.",
        image: {
            src: Gey,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contactame',
                href: '/damignr02@gmail.com'
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
