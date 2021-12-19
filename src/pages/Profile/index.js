import { Box, Container, Grid, Typography } from '@mui/material';

import PrivateRoute from '../../utils/PrivateRoute';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Redux
import { useSelector } from 'react-redux';

import profileImg from '../../assets/images/avatar.png';

const Profile = () => {

    // Redux
    const user = useSelector((state) => state.auth.user);

    return (
        <PrivateRoute>
            <Header />
            <Box component="div" sx={{
                padding: '70px 0'
            }}>
                <Container fixed>
                    <Box component="div" sx={{
                        backgroundColor: '#fff',
                        padding: {
                            md: '50px 40px',
                            xs: '30px 20px'
                        },
                        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px'
                    }}>
                        <Grid container spacing={5}>
                            <Grid item md={4} sm={5} xs={12} sx={{
                                textAlign: {
                                    xs: 'center',
                                    sm: 'left'
                                }
                            }}>
                                <img src={user?.photo ? user.photo : profileImg} alt="User" style={{
                                    maxWidth: '150px',
                                    borderRadius: '50%'
                                }} />
                            </Grid>
                            <Grid item md={8} sm={7} xs={12}>
                                <Typography variant="h2" component="h2" sx={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: {
                                        xs: '20px',
                                        md: '25px'
                                    },
                                    fontWeight: '600',
                                    marginBottom: '30px'
                                }}>
                                    Welcome <span style={{ color: 'var(--title-color)' }}>{user?.displayName}</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </PrivateRoute>
    );
};

export default Profile;