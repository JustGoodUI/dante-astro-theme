
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://dheirylopez.github.io/',
    avatar: {
        src: '/images/perfil.jpg',
        alt: 'Dheiry Lopez'
    },

    title: 'Dheiry Lopez ',
    subtitle: ' ',
    description: ' ',

    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
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
        }

    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'www.linkedin.com/in/dheiry-lopez-22665aa0'
        },
        {
            text: 'Upwork',
            href: 'https://www.upwork.com/freelancers/~01d1eb273b35ecee7c?s=1110580753069494272'
        },
        {
            text: 'Github',
            href: 'https://github.com/dheirylopez'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/lopezdheiry?igsh=YmRjd3NxNmloZW5o&utm_source=qr'
        }
    ],
    hero: {
        title: 'Hello & Welcome! Explore My Software Projects!',
        text: "Hi, I’m Dheiry López, a Senior Software Engineer with 7+ years of experience delivering scalable software solutions and supporting cross-functional project execution.<br /><br /> My background includes designing and developing enterprise applications, building RESTful APIs, contributing to microservices architectures, supporting AWS-based environments, and developing RPA bots with Automation Anywhere to streamline repetitive business processes and increase operational efficiency. <br /><br />I’ve worked across industries including energy, HR/payroll, healthcare manufacturing, and technology, which has given me the adaptability to understand new domains quickly and develop practical solutions for diverse business needs. <br /> <br />Today, I’m focused on helping companies and clients build software and automation solutions that are clean, maintainable, user-centered, and capable of driving long-term impact.",
        image: {
            src: '/images/Portada.jpg',
            alt: 'Portada Dheiry Lopez'
        },


        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    }
};

export default siteConfig;
