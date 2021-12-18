import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

const PageBanner = ({ title, bannerBg, breadCumb }) => {

    return (
        <Box component="div" sx={{
            background: `linear-gradient(rgba(0,0,0,.60),rgba(0,0,0,.60)), url(${bannerBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            padding: {
                md: '150px 0',
                sm: '120px 0',
                xs: '80px 0'
            },
            textAlign: 'center',
            color: '#fff'
        }}>
            <Container fixed>
                <Typography variant="h3" component="h3" sx={{
                    fontSize: '35px'
                }}>
                    {title}
                </Typography>
                <Typography variant="p" component="p" sx={{
                    fontSize: '18px',
                    color: '#ddd'
                }}>
                    <Link to="/">
                        Home /
                    </Link>
                    <span style={{ color: 'var(--primary-color)' }}>{breadCumb}</span>
                </Typography>
            </Container>
        </Box>
    );
};

export default PageBanner;