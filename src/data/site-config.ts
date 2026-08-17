import type { SiteConfig } from '../types';
// Importamos tu foto real desde la carpeta de assets
import fotoperfilcam from '../assets/images/fotoperfilcam.jpg'; 

const siteConfig: SiteConfig = {
    website: 'https://Gilgamesh-Camilo.github.io',
    avatar: {
        src: fotoperfilcam, // Usamos la variable importada
        alt: 'Juan Camilo Martín Barrero'
    },
    title: 'Portafolio BD2',
    subtitle: 'Portafolio de Ingeniería de Sistemas',
    description: 'Portafolio personal y proyectos de Juan Camilo Martín Barrero.',
    image: {
        src: '/fotoperfilcam.jpg', // Para el SEO, suele pedir ruta estática
        alt: 'Portafolio BD2'
    },
    headerNavLinks: [
        { text: 'Inicio', href: '/' },
        { text: 'Proyectos', href: '/projects' },
        { text: 'Presentación', href: '/presentacion' },
        { text: 'Evidencias', href: '/evidencias' }
    ],
    footerNavLinks: [
        { text: 'Sobre mí', href: '/about' },
        { text: 'Contacto', href: '/contact' },
        { text: 'Mi GitHub', href: 'https://github.com/Gilgamesh-Camilo' }
    ],
    socialLinks: [
        { text: 'GitHub', href: 'https://github.com/Gilgamesh-Camilo' },
        { text: 'WhatsApp', href: 'https://wa.me/573003361010' },
        { text: 'Llamar', href: 'tel:3003361010' }
    ],
    hero: {
        title: '¡Hola! Bienvenido a mi Portafolio',
        text: "Soy **Juan Camilo Martín Barrero**, estudiante de Ingeniería de Sistemas en la Universidad El Bosque.\n\nMe apasiona el desarrollo tecnológico, la estructuración de bases de datos y la resolución de problemas mediante código. Aquí comparto algunos de mis proyectos académicos y personales.\n\nPuedes explorar mi trabajo directamente en mi [GitHub](https://github.com/Gilgamesh-Camilo).",
        image: {
            src: fotoperfilcam, // Usamos la variable importada aquí también
            alt: 'Avatar de Juan Camilo'
        },
        actions: [
            { text: 'Ir a mi GitHub', href: 'https://github.com/Gilgamesh-Camilo' },
            { text: 'Contáctame', href: 'tel:3003361010' }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Suscríbete a mi boletín',
        text: 'Recibe actualizaciones semanales directamente en tu correo.',
        form: { action: '#' }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;