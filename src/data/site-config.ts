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
    text2?: string;
    text3?: string;
    text4?: string;
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
    title: 'Manon Jacquin',
    subtitle: '',
    description: 'Manon Portfolio and services',
    image: {
        src: '',
        alt: 'Manon photo'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Coaching',
            href: '/coaching'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Subscribe',
            href: 'https://mirth-and-mastery.beehiiv.com/subscribe'
        },
        // {
        //     text: 'Writing',
        //     href: '/blog'
        // },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        {
            text: 'Subscribe',
            href: 'https://mirth-and-mastery.beehiiv.com/subscribe'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/manonjacquin'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/muditaja'
        }
    ],
    hero: {
        title: 'Hi, I am Manon️!',
        // text: "I help people navigate life's changes and manage conflict resolution",
        text: "Former <u>legal attaché at the UN</u> turned tech developer, I offer coaching to help you navigate <u>career & life's changes</u> and manage <u>conflict resolution</u>",
        // text: "An adventurous tech lady who's been working as a fullstack developer for the past 5 years, to then take the opportunity to work in Product Management for a year. What I love about tech are its endless growth opportunities, creativity, and that it brings people from different cultures and backgrounds together. ",
        // text2: "I originally studied humanitarian law and politics, and I worked at the United Nations where I represented France in diplomatic duties. I am proud to have been part of the negotiations for the recently ratified convention on biodiversity beyond national jurisdiction which protect our oceans.",
        text3: "And the feeling of being lost! Through my own journey from law to tech, and from adapting to different cultures and countries, I’ve seen firsthand the power of reinvention and the importance of support along the way.",
        text4: "My approach is human-centered, I focus on building strong, supportive relationships that empower you to explore your potential, make bold transitions, and thrive in your chosen paths.",
        image: {
            src: '/hero.png',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: "Let's chat!",
                href: 'https://calendly.com/manon-jacquin/15min'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Manon Newsletter',
        text: 'Get a monthly dose of good vibes, tips and tricks on living a richer life! ',
        formUrl: ''
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
