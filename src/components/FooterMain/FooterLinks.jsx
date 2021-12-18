import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const styles = {
    list: {
        marginBottom: '15px',
        '&:last-child': {
            marginBottom: '0'
        }
    }
}

const FooterLinks = () => {
    return (
        <Box component="ul">
            <Box component="li" sx={styles.list}>
                <Link to="/about">
                    About Us
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link to="/blogs">
                    Our Blogs
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link to="/cases">
                    Our Cases
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link to="/events">
                    Our Events
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link to="/contact">
                    Contact Us
                </Link>
            </Box>
        </Box>
    );
};

export default FooterLinks;