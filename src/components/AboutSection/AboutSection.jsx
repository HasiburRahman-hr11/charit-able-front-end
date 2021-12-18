import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';

import aboutImg from '../../assets/images/about.png';

const AboutSection = () => {
    return (
        <Box component="section" className='section about__section' sx={{
            padding: '100px 0',
            overflow: 'hidden'
        }}>
            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <SectionHeader
                            title="We Are In A Mission To Help The Helpless"
                            subtitle="Who we are?"
                        />
                        <Typography variant="p" component="p" sx={{
                            color: '#666',
                            lineHeight: '25px',
                            marginTop: '40px'
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam tempore accusantium iure laudantium dolorum, nihil rerum fugit iusto facere cum repellat corrupti in fugiat, cumque quam asperiores quibusdam facilis laborum, porro pariatur a! Harum maxime nihil esse aliquam recusandae ducimus deleniti corporis neque ullam dicta possimus velit aperiam impedit minus corrupti nam, voluptatem veritatis accusantium dolorum expedita alias? Porro ut minima officia id, sint enim architecto tempora delectus perspiciatis cumque facilis at odit provident quasi officiis harum obcaecati tenetur maiores qui, numquam dolores labore fugit! Iusto incidunt aspernatur minus sunt. Cupiditate et error, dolorem at tempore ducimus voluptatum nostrum?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="div" sx={{
                            width: '165%',
                            position: 'relative',
                            right: '-34px',
                            top: {
                                md: '-25px',
                                xs: '0'
                            },
                        }}>
                            <img src={aboutImg} alt="About" style={{
                                width: '100%',
                                objectFit: 'cover'
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;