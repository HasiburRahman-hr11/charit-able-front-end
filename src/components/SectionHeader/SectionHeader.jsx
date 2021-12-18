import React from 'react';
import { Box, Typography } from '@mui/material';


const styles = {
    wrapper: {
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
    },
    title: {
        color: 'var(--title-color)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: {
            md:'50px',
            sm:'40px',
            xs:'30px'
        },
        fontWeight: '600'
    },
    subtitle: {
        color: 'var(--primary-color)',
        fontSize: '22px',
        marginBottom: '20px'
    }
}

const SectionHeader = ({ title, subtitle }) => {
    return (
        <Box component="div" className='section__header' sx={styles.wrapper}>
            <Typography variant='h3' component='h3' sx={styles.subtitle}>
                {subtitle}
            </Typography>
            <Typography variant='h2' component='h2' sx={styles.title}>
                {title}
            </Typography>
        </Box>
    );
};

export default SectionHeader;