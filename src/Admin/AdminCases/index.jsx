import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import AdminRoute from '../../utils/AdminRoute';
import { deleteCase, getAllCases } from '../../redux/cases/apiCalls';
import Loading from '../../components/Loading/Loading';

const AdminCases = () => {

    const dispatch = useDispatch();
    const { cases, isFetching } = useSelector(state => state.cases);

    const handleDeleteCase = (id) => {
        const isAgree = window.confirm('Confirm delete case?');
        if (isAgree) {
            deleteCase(dispatch, id);
        }
    }

    useEffect(() => {
        getAllCases(dispatch);
    }, [dispatch]);

    if (isFetching) {
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
                    <Typography variant="h3" component="h3" className="title" sx={{
                        color: 'var(--primary-color)',
                        fontSize: '25px',
                        marginBottom: '30px'
                    }}>
                        All Cases
                    </Typography>
                    <Grid container spacing={5}>
                        {cases.map(item => (
                            <Grid item xs={12} sm={6} md={4} key={item._id}>
                                <DashboardCard
                                    data={item}
                                    link='/dashboard/cases/edit'
                                    deleteHandler={handleDeleteCase}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </AdminRoute>
    );
};

export default AdminCases;