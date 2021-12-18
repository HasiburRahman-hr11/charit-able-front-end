
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

import team1 from './assets/images/team-1.jpg';
import team2 from './assets/images/team-2.jpg';
import team3 from './assets/images/team-3.jpg';

export const teamData = [
    {
        name: 'Nick Fury',
        designation: 'CEO & Founder',
        image:team1,
        social: [
            { icon: <FaFacebookF />, link: '/' },
            { icon: <FaLinkedinIn />, link: '/' },
            { icon: <FaGithub />, link: '/' },
            { icon: <FaTwitter />, link: '/' }
        ]
    },
    {
        name: 'Scott Smith',
        designation: 'Volunteer',
        image:team2,
        social: [
            { icon: <FaFacebookF />, link: '/' },
            { icon: <FaLinkedinIn />, link: '/' },
            { icon: <FaGithub />, link: '/' },
            { icon: <FaTwitter />, link: '/' }
        ]
    },
    {
        name: 'Annie Antonio',
        designation: 'Volunteer',
        image:team3,
        social: [
            { icon: <FaFacebookF />, link: '/' },
            { icon: <FaLinkedinIn />, link: '/' },
            { icon: <FaGithub />, link: '/' },
            { icon: <FaTwitter />, link: '/' }
        ]
    }
];


