import React, { useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { useFirebase } from '../../hooks/useFirebase';
import SignInMethods from '../../components/SignInMethods/SignInMethods';

const Login = () => {

    // Firebase functions
    const { signInWithEmailPassword, loading } = useFirebase();

    // Redux User State
    const user = useSelector(state => state.auth.user)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        signInWithEmailPassword(formData.email, formData.password , navigate);
    }

    useEffect(() => {
        if (user.email || user.displayName) {
            navigate('/')
        }
    }, [user,navigate])

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
                                {loading ? <CircularProgress sx={{
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
                                <Link href="/register" style={{
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