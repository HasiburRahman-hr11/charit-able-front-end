import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { BsFillPersonFill, BsCalendarDate } from 'react-icons/bs';
import convertToBase64 from '../../utils/convertToBase64';

const styles = {
    card: {
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 5px',
    },
    title: {
        color: 'var(--title-color)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '25px',
        fontWeight: '600',
        padding: '30px 25px'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '18px 0',
        borderTop: '1px solid #ddd',
        margin: '0 30px'
    },
    listItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--primary-color)',
        '& span': {
            marginLeft: '5px',
            color: '#666'
        }
    }
}

const BlogCard = ({ blog }) => {
    return (
        <Box component="div" className='blog__item' sx={styles.card}>
            {blog?.thumbnail && (
                <img src={`data:image/png;base64,${convertToBase64(blog.thumbnail.data)}`} alt={blog.title} />
            )}

            <Typography variant="h2" component="h2" sx={styles.title}>
                <Link to={`/blogs/${blog._id}`}>
                    {blog?.title?.substr(0 , 30) + '...'}
                </Link>
            </Typography>

            <Box component="ul" sx={styles.list}>
                <Box component="li" sx={styles.listItem}>
                    <BsFillPersonFill />
                    <span>{blog.author}</span>
                </Box>
                <Box component="li" sx={styles.listItem}>
                    <BsCalendarDate />
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogCard;