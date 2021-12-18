import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterBlogs from './FooterBlogs';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

const styles = {
    title: {
        fontFamily: "'Oswald', sans-serif",
        fontSize: {
            sm: '25px',
            xs: '20px'
        },
        marginBottom: {
            sm: '30px',
            xs: '20px'
        }
    }
}

const FooterMain = () => {
    return (
        <Box component="div" sx={{
            paddingBottom: '70px'
        }}>
            <Grid container spacing={5}>
                <Grid item md={3} sm={6} xs={12}>
                    <FooterCompanyInfo />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Typography variant='h3' component="h3" sx={styles.title}>Latest Blogs</Typography>
                    <FooterBlogs />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Typography variant='h3' component="h3" sx={styles.title}>Useful Links</Typography>
                    <FooterLinks />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Typography variant='h3' component="h3" sx={styles.title}>Contact</Typography>
                    <FooterContact />
                </Grid>
            </Grid>
        </Box>
    );
};

export default FooterMain;