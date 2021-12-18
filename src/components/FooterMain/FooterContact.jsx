import React from 'react';
import { Box, Typography } from '@mui/material';
import { GoLocation } from 'react-icons/go';
import { BsTelephone , BsEnvelopeOpen } from 'react-icons/bs';

const styles = {
    list: {
        display: 'flex',
        alignItems: 'center',
        marginBottom:'15px',
        '&:last-child':{
            marginBottom:'0'
        }
    }
}

const FooterContact = () => {
    return (
        <Box component="div">
            <Typography variant='p' component="p" sx={{
                marginBottom: '20px'
            }}>
                Wanna have a coffee with us?
            </Typography>
            <Box component="ul">
                <Box component="li" sx={styles.list}>
                    <GoLocation/>
                    <span style={{ marginLeft: '10px' }}>28 Street, New York, USA</span>
                </Box>
                <Box component="li" sx={styles.list}>
                    <BsTelephone/>
                    <span style={{ marginLeft: '10px' }}>+112 345 6789</span>
                </Box>
                <Box component="li" sx={styles.list}>
                    <BsEnvelopeOpen/>
                    <span style={{ marginLeft: '10px' }}>example@gmail.com</span>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterContact;