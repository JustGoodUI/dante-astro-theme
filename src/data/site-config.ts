export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Yorquidia Guzman Guzman',
    subtitle: 'Desarrolladora full stack junior',
    description: 'Porfolio de Yorquidia Guzman Guzman',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Projectos',
            href: '/projectos'
        },
        {
            text: 'CV',
            href: '/Curriculum vitae'
        },
        {
            text: 'Github',
            href: 'https://github.com/yorquidiaguzman'
        }
    ],
    footerNavLinks: [
        {
            text: 'A',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contacto'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/yorquidia-guzman-guzman/'
        },
    ],
    hero: {
        title: 'Transformando ideas en software',
        text: "¡Hola! Soy Yorquidia, una desarrolladora full stack que se entusiasma con la creación de soluciones tecnológicas. Mi experiencia abarca tanto el front-end como el back-end, utilizando tecnologías como [Menciona tus tecnologías clave de front-end, por ejemplo: React, JavaScript, HTML/CSS] para construir interfaces dinámicas y [Menciona tus tecnologías clave de back-end, por ejemplo: Node.js, Express, Python, SQL/NoSQL] para gestionar la lógica del servidor y las bases de datos.Si crees que mi perfil encaja con lo que buscas, te animo a revisar mi trabajo aquí en<a href = 'https://github.com/yorquidiaguzman'>GitHub</ a > a contactarme directamente en<a href = 'https://www.linkedin.com/in/yorquidia-guzman-guzman/'>/ X </a>.",
        image: {
            src: 'foto-cv.jpg'
            alt: 'Foto profesional de Yorquidia'
        },
        actions: [
            {
                text: 'Contacto',
                href: 'email: yorquidiaguzmang@gmail.com'
            }
        ]
    postsPerPage: 3,
        projectsPerPage: 3
    };

    export default siteConfig;
