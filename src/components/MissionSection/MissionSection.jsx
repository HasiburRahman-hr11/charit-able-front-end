import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import MissionCard from '../MissionCard/MissionCard';

import m1 from '../../assets/images/icon1.png';
import m2 from '../../assets/images/icon1.png';
import m3 from '../../assets/images/icon1.png';
import m4 from '../../assets/images/icon1.png';

const missions = [
    {
        image: m1,
        title: 'Clean Water',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    },
    {
        image: m2,
        title: 'Healthy Food',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    },
    {
        image: m3,
        title: 'Pure Education',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    },
    {
        image: m4,
        title: 'Medical Facilities',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    }
]

const MissionSection = () => {
    return (
        <Box component="section" className='section mission__section' sx={{
            backgroundColor: '#F7FBFE',
            padding: '100px 0'
        }}>
            <Container fixed>
                <SectionHeader
                    title="We Are In A Mission To Help The Helpless"
                    subtitle="What We Do?"
                />
                <Box component="div" className='section__body' sx={{
                    marginTop:'70px'
                }}>
                    <Grid container spacing={{ xs: 5, sm: 4 }}>
                        {missions.map((mission, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <MissionCard mission={mission} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default MissionSection;