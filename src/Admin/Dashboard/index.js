import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

import AdminRoute from '../../utils/AdminRoute';

const Dashboard = () => {

    return (
        <AdminRoute>
            <DashboardHeader />
            <Box component="div" sx={{
                // padding: '70px 0'
            }}>
                <Container fixed>
                    <Box component="div" sx={{
                        minHeight:'100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography variant="h3" component="h3" className="title" sx={{
                            color: 'var(--primary-color)',
                            fontSize: '25px',
                            textAlign: 'center'
                        }}>
                            Welcome to the Cockpit Boss.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </AdminRoute>
    );
};

export default Dashboard;
