import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const FooterBlogs = () => {
    const { blogs } = useSelector(state => state.blogs)
    return (
        <Box component="div">

            {blogs.slice(0, 2).map(blog => (
                <Box component="div" key={blog._id} sx={{
                    display: 'flex',
                    marginBottom: '20px',
                    '&:last-child': {
                        marginBottom: '0'
                    }
                }}>
                    <img src={blog.thumbnail} alt={blog.title} style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        marginRight: '10px'
                    }} />
                    <Box component="div">
                        <Link to={`/blogs/${blog._id}`}>
                            <Typography variant="h5" component="h5" sx={{
                                fontSize: {
                                    md: '17px',
                                    xs: '16px'
                                },
                                fontWeight: '600'
                            }}>
                                {blog.title.substring(0, 30)}...
                            </Typography>
                        </Link>
                        <Typography variant="p" component="p" sx={{
                            fontSize: {
                                md: '14px',
                                xs: '13px'
                            },
                            color: '#bbb',
                            marginTop: '5px'
                        }}>
                            {new Date(blog.createdAt).toLocaleDateString()}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default FooterBlogs;