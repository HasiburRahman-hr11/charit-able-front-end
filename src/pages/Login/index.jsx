import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { useFirebase } from '../../hooks/useFirebase';
import SignInMethods from '../../components/SignInMethods/SignInMethods';

const Login = () => {

    // Firebase functions
    const { signInWithEmailPassword, progress } = useFirebase();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        signInWithEmailPassword(formData.email, formData.password, navigate);
    }

    return (
        <>
            <Box component="div" className='login__page'>
                <Container fixed>
                    <Box component="div" className='auth__form_wrapper' sx={{
                        padding: {
                            xs: '30px 25px',
                            sm: '50px 40px'
                        }
                    }}>
                        <h3 className="auth__form_title">Sign In</h3>
                        <form action="" className='auth__form' onSubmit={submitHandler}>
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
                                    required
                                    minLength="6"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <button type='submit' className="auth__submit">
                                {progress ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '30px !important',
                                    height: '30px !important'
                                }} /> : 'Sign In'}
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
                                Don't have an account?
                                <Link to="/register" style={{
                                    color: '#0E88EE',
                                    marginLeft: '5px'
                                }}>Sign Up.</Link>
                            </Typography>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Login;

Login.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}