import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const styles = {
    iconStyle: {
        width: '35px',
        height: '35px',
        fontSize: '22px',
        position: 'absolute',
        right: '10px',
        top: '10px'
    }
}

const DashboardCard = ({ data, link, deleteHandler }) => {
    return (
        <Box component="div" sx={{
            backgroundColor: '#fff',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
            padding: '40px 30px',
            position: 'relative',
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <Typography variant="h3" component="h3" className="title" sx={{
                color: 'var(--title-color)',
                fontSize: '20px',
                textAlign: 'center'
            }}>
                <Link to={`cases/${data._id}`}>
                    {data.title}
                </Link>

            </Typography>
            <span className='icon__wrapper_primary' style={styles.iconStyle}>
                <Link to={`${link}/${data._id}`}>
                    <FiEdit />
                </Link>
            </span>

            <span className='icon__wrapper_primary' style={{ ...styles.iconStyle, backgroundColor: '#DB5146', right: '55px' }}
                onClick={() => deleteHandler(data._id)}
            >
                <AiOutlineDelete />
            </span>
        </Box>
    );
};

export default DashboardCard;