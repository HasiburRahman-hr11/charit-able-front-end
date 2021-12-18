import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

import DashboardCard from '../../components/DashboardCard/DashboardCard';
import AdminRoute from '../../utils/AdminRoute';
import Loading from '../../components/Loading/Loading';
import { deleteBlog, getAllBlogs } from '../../redux/blogs/apiCalls';

const AdminBlogs = () => {

    const dispatch = useDispatch();
    const { blogs, isFetching } = useSelector(state => state.blogs);

    const handleDeleteBlog = (id) => {
        const isAgree = window.confirm('Confirm delete blog?');
        if (isAgree) {
            deleteBlog(dispatch, id);
        }
    }

    useEffect(() => {
        getAllBlogs(dispatch);
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
                        All Blogs.
                    </Typography>
                    <Grid container spacing={5}>
                        {blogs.map(item => (
                            <Grid item xs={12} sm={6} md={4} key={item._id}>
                                <DashboardCard
                                    data={item}
                                    link='/dashboard/blogs/edit'
                                    deleteHandler={handleDeleteBlog}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </AdminRoute>
    );
};

export default AdminBlogs;
