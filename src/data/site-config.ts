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
    title: 'sagnikc395.xyz',
    subtitle: 'my personal website on internet',
    description: '',
    image: {
        src: '',
        alt: ''
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
            text: 'Source',
            href: 'https://github.com/sagnikc395/sagnikc395.xyz.git'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/sagnikc395'
        },
        {
            text: 'X',
            href: 'https://twitter.com/sagnikcw'
        }
    ],
    hero: {
        title: `thoughts on programming, mathematical logic and abstractions! it's gonna be a fun ride 🫶`,
        text: `I'm **Sagnik Chatterjee**, a Software Developer at IBM India, working in Backend Engineering (Java, SpringBoot) and Distributed Systems (HBase, Apache Kafka).
        I am interested in the domain of Programming Languages (especially the Functional Programming Paradigm) and Type Theory, and I like how gradual typing lets us create amazing software with both the sanity of typing and the flexibility of dynamically typed languages. 
        I have also recently become interested in mathematical logic and proof-oriented systems and how they help to formally verify software.
        \nFeel free to explore some of my coding endeavors on [GitHub](https://github.com/sagnikc395/) or follow me on [X](https://x.com/sagnikcw).`,
        image: {
            src: '/hero.jpg',
            alt: 'a oil painting of countryside'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
