import React from 'react';
import { Container, Box } from '@mui/material';
import NewsLetter from '../NewsLetter/NewsLetter';
import FooterMain from '../FooterMain/FooterMain';

const Footer = () => {
    return (
        <Box component="footer" className="footer" sx={{
            backgroundColor: '#062265',
            color: '#fff'
        }}>
            <Container fixed>
                <NewsLetter />
                <FooterMain />
            </Container>
            <Box component="div" sx={{
                backgroundColor: '#011B58',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '25px'
            }}>
                <Container fixed>
                    <p>Copyright &copy; {new Date().getFullYear()} HR-Hasib all rights reserved.</p>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;