import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box, CircularProgress, Container, Typography } from '@mui/material';

import { useFirebase } from '../../hooks/useFirebase';
import SignInMethods from '../../components/SignInMethods/SignInMethods';
import { errorNotify } from '../../utils/toastify';

const Register = () => {

    // Firebase 
    const { signUpWithEmailPassword, progress } = useFirebase();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            signUpWithEmailPassword(formData.name, formData.email, formData.password, navigate);
        } else {
            errorNotify('Password is not matching!');
        }
    }
    return (
        <>
            <Box component="div" className='register__page'>
                <Container fixed>
                    <Box component="div" className='auth__form_wrapper' sx={{
                        padding: {
                            xs: '30px 25px',
                            sm: '50px 40px'
                        }
                    }}>
                        <h3 className="auth__form_title">Sign Up</h3>
                        <form action="" className='auth__form' onSubmit={submitHandler}>
                            <div className="input__group">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="input__group">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="input__group">
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='password'
                                    minLength="6"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <div className="input__group">
                                <input
                                    type="password"
                                    name='confirmPassword'
                                    placeholder='Confirm Password'
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                />
                            </div>
                            <button type='submit' className="auth__submit">
                                {progress ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '30px !important',
                                    height: '30px !important'
                                }} /> : 'Sign Up'}
                            </button>
                            <Typography variant="p" component="p" sx={{
                                padding: '20px 0',
                                textAlign: 'center',
                                color: '#777',
                                fontSize: '14px'
                            }}>
                                Or Sign In With -
                            </Typography>

                            <SignInMethods />

                            <Typography variant="p" component="p" sx={{
                                textAlign: 'center',
                                color: '#777',
                                marginTop: '20px'
                            }}>
                                Already have an account?
                                <Link to="/login" style={{
                                    color: '#0E88EE',
                                    marginLeft: '5px'
                                }}>Sign In.</Link>
                            </Typography>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Register;


Register.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}