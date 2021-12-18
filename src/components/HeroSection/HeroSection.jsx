import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Grid, Box, Typography } from '@mui/material';

import heroImg from '../../assets/images/hero.png';

const styles = {
    container: {
        position: 'relative',
        minHeight: {
            lg: '950px'
        },
        padding: '100px 0'
    },
    title: {
        fontSize: {
            md: '70px',
            sm: '60px',
            xs: '40px'
        },
        fontFamily: "'Oswald', sans-serif",
        fontWeight: '700',
        color: 'var(--title-color)',
        marginBottom: '35px'
    },
    text: {
        color: '#666',
        fontSize: '20px',
        lineHeight: '27px',
        maxWidth: '450px',
        marginBottom: '35px'
    },
    heroRight: {
        position: 'absolute',
        display: {
            lg: 'block',
            xs: 'none'
        },
        right: '0',
        top: '0',
        width: '800px',
        height: '727px',
        zIndex: '-1',
        '&::before': {
            content: '""',
            background: `url(${heroImg}) 50%/cover no-repeat local`,
            width: '100%',
            height: '100%',
            position: 'absolute',
            right: '-100px',
            bottom: '0',
            top: '120px'
        }
    }
}

const HeroSection = () => {
    return (
        <Box component="section" className='section hero__section' sx={{
            overflow: 'hidden'
        }}>
            <Container fixed sx={styles.container}>
                <Grid container>
                    <Grid item xs={12} lg={5}>
                        <Box component="div" sx={{
                            padding: {
                                xs: '0 20px'
                            },
                            paddingTop: { lg: '130px' }
                        }}>
                            <Typography variant='h1' component="h1" sx={styles.title}>
                                Lets be kind for
                                <Box component="span" sx={{
                                    color: 'var(--primary-color)',
                                    display: {
                                        lg: 'block',
                                        xs: 'inline-block'
                                    }
                                }}>Children</Box>
                            </Typography>
                            <Typography variant='p' component="p" sx={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis sapiente aut.
                            </Typography>
                            <Link className='btn__primary' to="/donate">
                                Donate Now
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box className="hero__right" sx={styles.heroRight}></Box>
            </Container>
        </Box>
    );
};

export default HeroSection;

