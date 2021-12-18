import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import AdminRoute from "../../utils/AdminRoute";
import Loading from "../../components/Loading/Loading";
import { updateUser } from "../../redux/users/apiCalls";


const styles = {
    formWrapper: {
        maxWidth: '850px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: {
            md: '40px 30px',
            xs: '30px 20px'
        },
        border: '1px solid #ddd',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
    },
    title: {
        color: 'var(--primary-color)',
        fontSize: '25px',
        marginBottom: '30px',
        textAlign: 'center'
    }
}

const EditUser = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        role: ''
    });
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const dispatch = useDispatch();
    const { isFetching } = useSelector(state => state.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(dispatch, params.userId, userInfo);
    }


    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get(`https://charit-able-api.herokuapp.com/users/user-id/${params.userId}`);
                setUserInfo({
                    ...userInfo,
                    name: data.name,
                    email: data.email,
                    role: data.role
                })
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        if (params.userId) {
            getUser();
        }
    }, [params.userId]);

    if (loading) {
        return <Loading />
    }

    return (
        <AdminRoute>
            <DashboardHeader />

            <Box component="div" sx={{
                paddingTop: '110px',
                paddingBottom: '40px',
            }}>
                <Container fixed>
                    <Typography variant="h3" component="h3" className="title" sx={styles.title}>
                        Edit User Details
                    </Typography>

                    <Box component="div" sx={styles.formWrapper}>
                        <form action="" onSubmit={handleSubmit}>
                            <Grid container spacing={5}>
                                <Grid item md={4} sm={6} xs={12}>
                                    <div className="input__group">
                                        <label htmlFor="name">User Name</label>
                                        <input
                                            type="text"
                                            className="admin__input"
                                            id="name"
                                            placeholder="User Name"
                                            value={userInfo.name}
                                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                        />
                                    </div>
                                </Grid>
                                <Grid item md={5} sm={6} xs={12}>
                                    <div className="input__group">
                                        <label htmlFor="email">User Email</label>
                                        <input
                                            type="email"
                                            className="admin__input"
                                            readOnly
                                            placeholder="User Email"
                                            value={userInfo.email}
                                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                        />
                                    </div>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <div className="input__group">
                                        <label htmlFor="role">User Role</label>
                                        <select
                                            className="admin__input"
                                            id="role"
                                            placeholder="User Role"
                                            value={userInfo.role}
                                            onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value })}
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="subscriber">Subscriber</option>
                                        </select>
                                    </div>
                                </Grid>
                            </Grid>
                            <button type="submit" className="btn__primary" style={{ maxHeight: '45px', width: '120px' }}>
                                {isFetching ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '25px !important',
                                    height: '25px !important'
                                }} /> : 'Submit'}
                            </button>
                        </form>
                    </Box>
                </Container>
            </Box>

        </AdminRoute>
    );
};

export default EditUser;
