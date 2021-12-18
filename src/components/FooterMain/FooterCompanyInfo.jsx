import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
    {
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com'
    },
    {
        icon: <FaTwitter />,
        link: 'https://www.twitter.com'
    },
    {
        icon: <FaGithub />,
        link: 'https://www.github.com'
    },
    {
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com'
    }
]

const FooterCompanyInfo = () => {
    return (
        <>
            <img src="/images/logo-white.png" alt="Logo" style={{ maxWidth: '150px', objectFit: 'cover' }} />

            <Typography variant="p" component="p" sx={{
                lineHeight: '25px',
                marginTop: '20px',
                marginBottom: '30px'
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic, repudiandae nobis dolorem quisquam voluptas?
            </Typography>
            <Box component="ul" sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                {socials.map((social, index) => (
                    <Box component="li" key={index}>
                        <a href={social.link} target="_blank" rel="noreferrer" style={{
                            color:'#fff',
                            fontSize:'22px',
                            marginRight:'15px'
                        }}>
                            {social.icon}
                        </a>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default FooterCompanyInfo;