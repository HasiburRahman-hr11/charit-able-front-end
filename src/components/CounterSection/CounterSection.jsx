import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import bgImg from '../../assets/images/counter-bg.jpg'

const counters = [
    {
        title: '3500',
        text: 'Donations'
    },
    {
        title: '50',
        text: 'Fund Raised'
    },
    {
        title: '125',
        text: 'Volunteers'
    },
    {
        title: '340',
        text: 'Projects'
    }
];

const styles = {
    section: {
        background: `linear-gradient(rgba(6,34,101,.55),rgba(6,34,101,.55)), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0',
        textAlign: 'center'
    },
    item: {
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '57px',
            right: '0',
            width: '1px',
            height: '70px',
            background: '#999',
            display: {
                xs: 'none',
                md: 'block'
            }
        },
        ":last-child::before": {
            display: "none"
        }
    },
    title: {
        fontFamily: "'Oswald', sans-serif",
        fontSize: {
            sm: '50px',
            xs: '35px'
        },
        marginBottom: '5px',
        fontWeight: '600',
        color: '#fff'
    },
    text: {
        color: '#999',
        fontSize: {
            sm: '20px',
            xs: '18px'
        }
    }
}

const CounterSection = () => {
    return (
        <Box component="section" className='section counter__section' sx={styles.section}>
            <Container fixed>
                <Grid container spacing={5}>
                    {counters.map((item, index) => (
                        <Grid item xs={6} md={3} key={index} sx={styles.item}>
                            <Box component="div">
                                <Typography variant="h2" component="h2" sx={styles.title}>
                                    {item.title}+
                                </Typography>
                                <Typography variant="p" component="p" sx={styles.text}>
                                    {item.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CounterSection;