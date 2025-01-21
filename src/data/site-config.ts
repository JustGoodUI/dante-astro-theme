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
    title: 'JSJ',
    subtitle: 'Juan CV y Blog',
    description: 'CV y Blog de Juan S.',
    image: {
        src: '/JSJ.jpg',
        alt: 'Mi foto'
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
            text: 'Instagram',
            href: 'https://www.instagram.com/juansaezj/'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/juan-s%C3%A1ez-ja%C3%A9n-4b8456168/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome my Web!',
        text: "I'm Juan Sáez, an engineering student specializing in electronics. I am primarily interested in the world of automation and am currently doing an internship at Siemens, working with industrial computers",
        image: {
            src: '/JSJ.jpg',
            alt: 'Yo'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Juan Newsletter',
        text: 'All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
