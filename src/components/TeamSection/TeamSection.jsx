import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import TeamCard from '../TeamCard/TeamCard';

import {teamData} from '../../fakeData';

const TeamSection = () => {
    return (
        <Box component="section" className='section team__section' sx={{
            padding: '100px 0'
        }}>
            <Container fixed>
                <SectionHeader
                    title="Our Expert Volunteer"
                    subtitle="Meet Our Team"
                />
                <Box component="div" className='section__body' sx={{
                    marginTop: '70px'
                }}>
                    <Grid container spacing={{ xs: 5, sm: 4 }}>
                        {teamData.map((team, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{
                                marginBottom:{
                                    xs:'70px',
                                    md:'0'
                                }
                            }}>
                                <TeamCard team={team} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamSection;