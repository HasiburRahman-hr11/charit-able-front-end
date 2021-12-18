import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Typography } from '@mui/material';
import { BsFillPeopleFill } from 'react-icons/bs';

import bgImg from '../../assets/images/change-world.png'

const styles = {
    section: {
        background: `linear-gradient(rgba(8,204,127,.85),rgba(8,204,127,.85)), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '120px 0',
        textAlign: 'center',
        marginTop: '50px'
    },
    title: {
        fontFamily: "'Oswald', sans-serif",
        fontSize: {
            sm: '40px',
            xs: '30px'
        },
        fontWeight: '600',
        color: '#fff'
    },
    button: {
        backgroundColor: '#fff',
        height: '48px',
        padding: '10px 25px',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '5px',
        color: '#666',
        fontWeight: '600'
    }
}

const WorldSection = () => {
    return (
        <Box component="section" className='section world__section' sx={styles.section}>
            <Container fixed>
                <Grid container spacing={4} sx={{
                    alignItems: 'center'
                }}>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h2" component="h2" sx={styles.title}>
                            Lets Change The World With Humanity
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box component="div">
                            <Link to="/" style={styles.button}>
                                <BsFillPeopleFill />
                                <span style={{ marginLeft: '5px' }}>Become a Volunteer</span>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WorldSection;