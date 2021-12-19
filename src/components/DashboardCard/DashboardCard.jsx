import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import convertToBase64 from '../../utils/convertToBase64';

const styles = {
    iconStyle: {
        width: '35px',
        height: '35px',
        fontSize: '22px'
    }
}

const DashboardCard = ({ data, link, deleteHandler }) => {
    return (
        <Box component="div" sx={{
            backgroundColor: '#fff',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
            padding: '20px 20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius:'5px'
        }}>
            {data?.thumbnail && (
                <Box component="img" src={`data:image/png;base64,${convertToBase64(data.thumbnail.data)}`} alt={data.title} sx={{
                    maxHeight: '220px',
                    objectFit: 'cover',
                    display: 'block',
                    width: '100%'
                }} />
            )}
            <Typography variant="h3" component="h3" className="title" sx={{
                color: 'var(--title-color)',
                fontSize: '20px',
                textAlign: 'center',
                padding: '20px 0'
            }}>
                <Link to={`cases/${data._id}`}>
                    {data.title.substr(0, 40) + '...'}
                </Link>

            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <span className='icon__wrapper_primary' style={styles.iconStyle}>
                    <Link to={`${link}/${data._id}`}>
                        <FiEdit />
                    </Link>
                </span>

                <span className='icon__wrapper_primary' style={{ ...styles.iconStyle, backgroundColor: '#DB5146', marginLeft: '15px' }}
                    onClick={() => deleteHandler(data._id)}
                >
                    <AiOutlineDelete />
                </span>
            </Box>
        </Box>
    );
};

export default DashboardCard;