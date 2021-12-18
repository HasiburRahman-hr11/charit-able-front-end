import React from 'react';
import { Typography, Box } from '@mui/material';


const styles = {
    card: {
        backgroundColor: '#fff',
        padding: '50px 20px',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
        textAlign: 'center'
    },
    iconWrapper: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
        padding: '10px',
        margin: '0 auto'
    },
    title: {
        color: 'var(--title-color)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '25px',
        fontWeight: '600',
        margin: '20px 0',
    }
}


const MissionCard = ({ mission }) => {
    return (
        <Box component="div" className='mission__card' sx={styles.card}>
            <Box component="div" sx={styles.iconWrapper}>
                <img
                    src={mission.image}
                    alt="Logo"
                />
            </Box>

            <Typography variant='h2' component="h2" sx={styles.title}>
                {mission.title}
            </Typography>
            <Typography variant='p' component="p" sx={{
                color: '#666',
                lineHeight: '25px'
            }}>
                {mission.text}
            </Typography>
        </Box>
    );
};

export default MissionCard;