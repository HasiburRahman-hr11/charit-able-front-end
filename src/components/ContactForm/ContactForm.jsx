import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const styles = {
    formWrapper: {
        backgroundColor: '#fff',
        padding: {
            sm: '30px 30px',
            xs: '20px 20px'
        },
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px'
    },
    title:{
        color: 'var(--title-color)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '25px',
        fontWeight: '600',
        marginBottom:'30px',
        textAlign:'center'
    },
    inputWrapper: {
        marginBottom: '15px'
    },
    input: {
        border: 'none',
        borderBottom: '1px solid #ddd',
        padding: '10px',
        height: '40px'
    },
    submitBtn:{
        backgroundColor:'var(--primary-color)',
        color:'#fff',
        padding:'10px 25px',
        borderRadius:'5px',
        '&:hover':{
            backgroundColor:'var(--primary-color)'
        }
    }
}

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Box component="div" sx={styles.formWrapper}>
            <Typography variant="h4" component="h4" sx={styles.title}>Get in Touch</Typography>
            <form onSubmit={handleSubmit} className='contact__form'>
                <Box component="div" sx={styles.inputWrapper}>
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{
                            paddingRight: {
                                xs: '0px',
                                sm: '10px'
                            },
                            marginBottom: {
                                sm: '0px',
                                xs: '15px'
                            }
                        }}>
                            <input
                                type="text"
                                name='firstName'
                                placeholder='First Name'
                                required
                                style={styles.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{
                            paddingLeft: {
                                xs: '0px',
                                sm: '10px'
                            }
                        }}>
                            <input
                                type="text"
                                name='firstName'
                                placeholder='Last Name'
                                required
                                style={styles.input}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box component="div" sx={styles.inputWrapper}>
                    <input
                        type="email"
                        name='email'
                        placeholder='Your Email'
                        required
                        style={styles.input}
                    />
                </Box>
                <Box component="div" sx={styles.inputWrapper}>
                    <input
                        type="text"
                        name='text'
                        placeholder='Subject'
                        required
                        style={styles.input}
                    />
                </Box>
                <Box component="div" sx={styles.inputWrapper}>
                    <textarea
                        name='text'
                        placeholder='Message'
                        required
                        style={{ ...styles.input, minHeight: '100px' }}
                    />
                </Box>
                <Button type="submit" sx={styles.submitBtn}>Submit</Button>
            </form>
        </Box>
    );
};

export default ContactForm;