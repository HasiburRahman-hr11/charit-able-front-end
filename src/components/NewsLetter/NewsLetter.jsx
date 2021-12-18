import React from 'react';
import { Box, Typography, Button } from '@mui/material';


const styles = {
    title: {
        fontFamily: "'Oswald', sans-serif",
        fontSize: {
            sm: '40px',
            xs: '30px'
        },
        marginBottom: '40px'
    },
    input: {
        height: '55px',
        backgroundColor: '#fff',
        borderRadius: '30px',
        paddingLeft: '20px'
    },
    button: {
        backgroundColor: 'var(--primary-color)',
        height: '45px',
        padding: '10px 20px',
        borderRadius: '30px',
        position: 'absolute',
        right: '6px',
        top: '5px',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'var(--primary-color)',
        }
    }
}

const NewsLetter = () => {
    return (
        <Box component="div" sx={{
            padding: '70px 0',
            textAlign: 'center'
        }}>
            <Typography variant="h3" component="h3" sx={styles.title}>
                Subscribe To Our Newsletter
            </Typography>

            <Box component="div" sx={{
                maxWidth: '500px',
                margin: '0 auto',
                position: 'relative'
            }}>
                <Box component="input" type="email" placeholder='Enter Email' sx={styles.input} />
                <Button type='button' sx={styles.button}> Subscribe </Button>
            </Box>
        </Box>
    );
};

export default NewsLetter;