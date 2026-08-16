// He comentado estas dos líneas para que no den error de "no usado" 
// ya que usaremos URLs directas para las imágenes de Pokémon por ahora.
// import avatar from '../assets/images/avatar.jpg';
// import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://Gilgamesh-Camilo.github.io',
    avatar: {
        // Imagen de Pikachu temporal
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        alt: 'Juan Camilo Martín Barrero'
    },
    title: 'Portafolio BD2',
    subtitle: 'Portafolio de Ingeniería de Sistemas',
    description: 'Portafolio personal y proyectos de Juan Camilo Martín Barrero.',
    image: {
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        alt: 'Portafolio BD2 - Astro.js y Tailwind CSS'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Presentación',
            href: '/presentacion'
        },
        {
            text: 'Evidencias',
            href: '/evidencias'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Mi GitHub',
            href: 'https://github.com/Gilgamesh-Camilo'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/Gilgamesh-Camilo'
        },
        {
            text: 'WhatsApp',
            href: 'https://wa.me/573003361010' // Enlace directo a tu WhatsApp
        },
        {
            text: 'Llamar',
            href: 'tel:3003361010'
        }
    ],
    hero: {
        title: '¡Hola! Bienvenido a mi Portafolio',
        text: "Soy **Juan Camilo Martín Barrero**, estudiante de Ingeniería de Sistemas en la Universidad El Bosque.\n\nMe apasiona el desarrollo tecnológico, la estructuración de bases de datos y la resolución de problemas mediante código. Aquí comparto algunos de mis proyectos académicos y personales.\n\nPuedes explorar mi trabajo directamente en mi [GitHub](https://github.com/Gilgamesh-Camilo).",
        image: {
            // Otra imagen de Pokémon temporal para la sección principal
            src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            alt: 'Avatar de Juan Camilo'
        },
        actions: [
            {
                text: 'Ir a mi GitHub',
                href: 'https://github.com/Gilgamesh-Camilo'
            },
            {
                text: 'Contáctame',
                href: 'tel:3003361010'
            }
        ]
    },
    subscribe: {
        enabled: false, // Apagado por defecto, ya que un newsletter no es común en un portafolio universitario
        title: 'Suscríbete a mi boletín',
        text: 'Recibe actualizaciones semanales directamente en tu correo.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;