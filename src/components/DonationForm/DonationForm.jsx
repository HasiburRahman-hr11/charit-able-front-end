import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addNewDonation } from '../../redux/donations/apiCalls';


import visaImg from '../../assets/images/payment-1.png';
import masterImg from '../../assets/images/payment-2.png';
import skrillImg from '../../assets/images/payment-3.png';
import payPalImg from '../../assets/images/payment-4.png';

const styles = {
    title: {
        fontSize: '18px',
        color: 'var(--title-color)',
        marginBottom: '20px',
    },
    form: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    input: {
        border: '1px solid #f1f1f1',
        height: '45px',
        padding: '10px',
        borderRadius: '5px'
    },
    wrapper: {
        padding: {
            md: '40px 30px',
            xs: '30px 20px'
        },
        border: '1px solid #ddd',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
    },
    cardImgWrapper: {
        width: '80px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px 15px',
        marginRight: '15px',
        marginBottom: '15px',
        border: '1px solid #B7FCE1',
        cursor: 'pointer',
        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        borderRadius: '3px'
    }
}

const DonationForm = () => {

    const { user } = useSelector(state => state.auth);
    const { isFetching } = useSelector(state => state.donations);


    const [formData, setFormData] = useState({
        userInformation: {
            firstName: user?.displayName.split(' ')[0] || '',
            lastName: user?.displayName.split(' ')[1] || '',
            email: user?.email || '',
            address: '',
            message: ''
        },
        paymentInformation: {
            cardHolder: '',
            cardType: '',
            cardNumber: '',
            cvv: '',
            expireDate: '',
            amount: ''
        }
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        addNewDonation(dispatch, formData, navigate)
    }
    return (
        <form className="donation__form" style={styles.form} onSubmit={handleSubmit}>
            <Box component="div" sx={styles.wrapper}>
                <Typography variant="h4" component="h4"
                    className='title'
                    sx={styles.title}
                >
                    Details
                </Typography>
                <div className="input__group">
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{
                            paddingRight: {
                                xs: '0px',
                                sm: '10px'
                            },
                            marginBottom: {
                                sm: '0px',
                                xs: '20px'
                            }
                        }}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder='First Name'
                                required
                                style={styles.input}
                                value={formData.userInformation.firstName}
                                onChange={(e) => setFormData({ ...formData, userInformation: { ...formData.userInformation, firstName: e.target.value } })}
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
                                name="lastName"
                                placeholder='Last Name'
                                required
                                style={styles.input}
                                value={formData.userInformation.lastName}
                                onChange={(e) => setFormData({ ...formData, userInformation: { ...formData.userInformation, lastName: e.target.value } })}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className="input__group">
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{
                            paddingRight: {
                                xs: '0px',
                                sm: '10px'
                            },
                            marginBottom: {
                                sm: '0px',
                                xs: '20px'
                            }
                        }}>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email Address'
                                required
                                style={styles.input}
                                value={formData.userInformation.email}
                                onChange={(e) => setFormData({ ...formData, userInformation: { ...formData.userInformation, email: e.target.value } })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{
                            paddingLeft: {
                                xs: '0px',
                                sm: '10px'
                            }
                        }}>
                            <input
                                type="number"
                                name="amount"
                                placeholder='Donation Amount'
                                required
                                style={styles.input}
                                value={formData.paymentInformation.amount}
                                onChange={(e) => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, amount: e.target.value } })}
                                min={0}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="input__group">
                    <input
                        type="text"
                        name="address"
                        placeholder='Your Address'
                        required
                        style={styles.input}
                        value={formData.userInformation.address}
                        onChange={(e) => setFormData({ ...formData, userInformation: { ...formData.userInformation, address: e.target.value } })}
                    />
                </div>
                <div className="input__group">
                    <textarea
                        name="message"
                        placeholder='Message'
                        style={{ ...styles.input, minHeight: '100px' }}
                        value={formData.userInformation.message}
                        onChange={(e) => setFormData({ ...formData, userInformation: { ...formData.userInformation, message: e.target.value } })}
                    />
                </div>
            </Box>

            {/* Payment Area */}
            <Box component="div" sx={{ ...styles.wrapper, marginTop: '50px' }}>
                <Typography variant="h4" component="h4"
                    className='title'
                    sx={styles.title}
                >
                    Payment Details
                </Typography>

                <Box component="div" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '30px'
                }}>
                    <span style={{ ...styles.cardImgWrapper, borderColor: formData.paymentInformation.cardType === 'Visa' ? '#08CD7F' : '#B7FCE1' }}
                        onClick={() => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cardType: 'Visa' } })}>
                        <img src={visaImg} alt="Visa Card" />
                    </span>
                    <span style={{ ...styles.cardImgWrapper, borderColor: formData.paymentInformation.cardType === 'Master Card' ? '#08CD7F' : '#B7FCE1' }}
                        onClick={() => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cardType: 'Master Card' } })}>
                        <img src={masterImg} alt="Master Card" />
                    </span>
                    <span style={{ ...styles.cardImgWrapper, borderColor: formData.paymentInformation.cardType === 'Skrill' ? '#08CD7F' : '#B7FCE1' }} onClick={() => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cardType: 'Skrill' } })}>
                        <img src={skrillImg} alt="Skrill" />
                    </span>
                    <span style={{ ...styles.cardImgWrapper, borderColor: formData.paymentInformation.cardType === 'PayPal' ? '#08CD7F' : '#B7FCE1' }} onClick={() => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cardType: 'PayPal' } })}>
                        <img src={payPalImg} alt="PayPal" />
                    </span>
                </Box>

                <div className="input__group">
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{
                            paddingRight: {
                                xs: '0px',
                                sm: '10px'
                            },
                            marginBottom: {
                                sm: '0px',
                                xs: '20px'
                            }
                        }}>
                            <input
                                type="text"
                                name="cardHolder"
                                placeholder='Card Holder Name'
                                required
                                style={styles.input}
                                value={formData.paymentInformation.cardHolder}
                                onChange={(e) => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cardHolder: e.target.value } })}
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
                                name="cardNumber"
                                placeholder='Card Number'
                                required
                                style={styles.input}
                                value={formData.paymentInformation.cardNumber}
                                onChange={(e) => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cardNumber: e.target.value } })}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className="input__group">
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{
                            paddingRight: {
                                xs: '0px',
                                sm: '10px'
                            },
                            marginBottom: {
                                sm: '0px',
                                xs: '20px'
                            }
                        }}>
                            <input
                                type="text"
                                name="cvv"
                                placeholder='CVV'
                                required
                                style={styles.input}
                                value={formData.paymentInformation.cvv}
                                onChange={(e) => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, cvv: e.target.value } })}
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
                                name="expireDate"
                                placeholder='Expire Date'
                                required
                                style={styles.input}
                                value={formData.paymentInformation.expireDate}
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                                onChange={(e) => setFormData({ ...formData, paymentInformation: { ...formData.paymentInformation, expireDate: e.target.value } })}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <button type="submit" className="btn__primary" style={{ height: '50px', width: '180px', marginTop: '40px' }}>
                {isFetching ? <CircularProgress sx={{
                    color: '#fff',
                    width: '25px !important',
                    height: '25px !important'
                }} /> : 'Donate Now'}
            </button>
        </form>
    );
};

export default DonationForm;