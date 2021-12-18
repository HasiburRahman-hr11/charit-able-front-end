import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AiOutlineDelete } from 'react-icons/ai';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import Loading from '../../components/Loading/Loading';

import AdminRoute from '../../utils/AdminRoute';
import { deleteDonation, getAllDonations } from '../../redux/donations/apiCalls';

const styles = {
    icon: {
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7FBFE',
        borderRadius: '50%',
        fontSize: '22px',
        cursor: 'pointer'
    }
}

const Donations = () => {


    const dispatch = useDispatch();
    const { donations, isFetching } = useSelector(state => state.donations);

    useEffect(() => {
        getAllDonations(dispatch);
    }, [dispatch]);

    const handleDeleteDonation = (id) => {
        const isAgree = window.confirm('Confirm delete donation?');
        if (isAgree) {
            deleteDonation(dispatch, id)
        }
    }

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
                        All Users
                    </Typography>

                    {donations.length > 0 ? (
                        <TableContainer component="div" sx={{
                            backgroundColor: '#fff',
                            border: '1px solid #f1f1f1',
                            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
                        }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="left">Email</TableCell>
                                        <TableCell align="left">Amount</TableCell>
                                        <TableCell align="left">Payment</TableCell>
                                        <TableCell align="left">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {donations.map((donation) => (
                                        <TableRow
                                            key={donation._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {`${donation.userInformation.firstName} ${donation.userInformation.lastName}`}
                                            </TableCell>
                                            <TableCell align="left">{donation.userInformation.email}</TableCell>
                                            <TableCell align="left">{donation.paymentInformation.amount}</TableCell>
                                            <TableCell align="left">{donation.paymentInformation.cardType}</TableCell>
                                            <TableCell align="left">
                                                <span style={{ ...styles.icon, color: '#DD5044' }} onClick={() => handleDeleteDonation(donation._id)}><AiOutlineDelete /></span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <Box component="div" className="title" sx={{
                            padding: '50px 0',
                            textAlign: 'center',
                            color: 'var(--title-color)',
                            fontSize: '30px'
                        }}>
                            No donation received yet.
                        </Box>
                    )}

                </Container>
            </Box>
        </AdminRoute>
    );
};

export default Donations;
