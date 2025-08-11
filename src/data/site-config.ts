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
        text: "¡Hola! Soy Yorquidia, una desarrolladora full stack que se entusiasma con la creación de soluciones tecnológicas. Mi experiencia abarca tanto el front-end como el back-end, utilizando tecnologías como [Menciona tus tecnologías clave de front-end, por ejemplo: React, JavaScript, HTML/CSS] para construir interfaces dinámicas y [Menciona tus tecnologías clave de back-end, por ejemplo: Node.js, Express, Python, SQL/NoSQL] para gestionar la lógica del servidor y las bases de datos. Siempre pensé que mi vocación era la traducción, ya que disfrutaba conectar a las personas a través de la comunicación. Sin embargo, al descubrir la programación, encontré mi verdadera pasión: una nueva forma de comunicar. En lugar de conectar a personas con personas, ahora traduzco ideas de personas a máquinas para construir herramientas que resuelven problemas y ayudan a otros a alcanzar sus metas. Esta transición me ha permitido fusionar la lógica con la creatividad para desarrollar proyectos con un impacto real. Soy una persona proactiva, orientada a la resolución de problemas y siempre en busca de nuevas oportunidades para aprender y crecer.Me motiva trabajar en equipos que busquen crear productos de alta calidad y que me permitan aportar valor con mis habilidades.No dudes en echar un vistazo a mis proyectos o en contactarme si crees que mi perfil encaja con lo que buscas.Si crees que mi perfil encaja con lo que buscas, te animo a revisar mi trabajo aquí en<a href = 'https://github.com/yorquidiaguzman'>GitHub</ a > a contactarme directamente en<a href = 'https://www.linkedin.com/in/yorquidia-guzman-guzman/'>/ X </a>.",
        image: {
            src: assets / Foto CV.jpeg,
            alt: 'Foto profesional de Yorquidia'
        },
        actions: [
            {
                text: 'Contacto',
                href: 'email: yorquidiaguzmang@gmail.com'
            }
        ]
    postsPerPage: 8,
        projectsPerPage: 8
    };

    export default siteConfig;
