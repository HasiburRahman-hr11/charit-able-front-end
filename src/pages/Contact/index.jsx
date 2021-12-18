import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import { FaLocationArrow, FaPhoneAlt, FaRegEnvelopeOpen } from 'react-icons/fa';

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const contactCardsData = [
    {
        title: '28 Street, New York, USA',
        subtitle: 'Office Location',
        icon: <FaLocationArrow />
    },
    {
        title: 'example@mail.com',
        subtitle: 'Office Email',
        icon: <FaRegEnvelopeOpen />
    },
    {
        title: '+112 345 6789',
        subtitle: 'Office Phone',
        icon: <FaPhoneAlt />
    }
]

const styles = {

    card: {
        backgroundColor: '#fff',
        padding: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px'
    },
    cardTitle: {
        fontSize: '22px',
        color: 'var(--title-color)',
        marginBottom: '30px'
    },
    cardIcon: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: 'var(--primary-color)',
        marginRight: '10px',
        fontSize: '22px'
    },
}

const Contact = () => {
    return (
        <>
        <Header/>
            <PageBanner
                title="Contact Us"
                bannerBg="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="Contact"
            />

            <Box component="div" sx={{
                padding: '100px 0'
            }}>
                <Container fixed>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <ContactForm />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component="div" sx={{
                                overflow: 'hidden',
                                maxHeight: {
                                    xs: '300px',
                                    sm: '450px'
                                }
                            }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14394.515055170705!2d-73.94963579956199!3d40.672337837009266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b83974ed2f7%3A0x62db893dfec0844a!2sBrooklyn%20Children&#39;s%20Museum!5e0!3m2!1sbn!2sbd!4v1639591251727!5m2!1sbn!2sbd" width="600" height="500" style={{ border: '0' }} allowFullScreen loading="lazy" title='Google Map'></iframe>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box component="div" sx={{
                        marginTop: '70px'
                    }}>
                        <Grid container spacing={5}>
                            {contactCardsData.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box component="div" sx={styles.card}>
                                        <Typography variant="h4" component="h4"
                                            className='title'
                                            sx={styles.cardTitle}>
                                            {item.title}
                                        </Typography>
                                        <Box component="div" sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <span style={styles.cardIcon}>
                                                {item.icon}
                                            </span>
                                            <span style={{ color: '#666', fontSize: '18px' }}>{item.subtitle}</span>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer/>
        </>
    );
};

export default Contact;