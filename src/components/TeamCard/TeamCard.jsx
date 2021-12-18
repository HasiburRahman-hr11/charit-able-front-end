import React from 'react';
import { Box, Typography } from '@mui/material';


const styles = {
    info: {
        textAlign: 'center',
        backgroundColor: '#fff',
        width: 'calc(100% - 50px)',
        height: '110px',
        overflow: 'hidden',
        position: 'absolute',
        right: '0',
        bottom: '-50px',
        padding: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        transition: '0.4s all',
        '& .team__title': {
            fontFamily: "'Oswald', sans-serif",
            fontSize: '23px',
            fontWeight: '600',
            color: 'var(--title-color)',
            marginBottom: '10px'
        },
        '& .team__sub': {
            color: '#666',
            marginBottom: '25px',
            fontSize: '18px'
        },
        '& .team__icon': {
            color: 'var(--title-color)',
            fontSize: '18px'
        },
        '&:hover': {
            height: '160px',
            backgroundColor: 'var(--primary-color)'
        },
        '&:hover .team__title , &:hover .team__sub,&:hover .team__icon': {
            color: '#fff'
        }
    }
}

const TeamCard = ({ team }) => {
    return (
        <Box component="div" className='team__item' sx={{
            position: 'relative'
        }}>
            <Box component="div" className="team__image">
                <img src={team.image} alt={team.name} />
            </Box>
            <Box component="div" className="team__info" sx={styles.info}>
                <Typography variant="h4" component="h4" className='team__title'>
                    {team.name}
                </Typography>
                <Typography variant="p" component="p" className='team__sub'>
                    {team.designation}
                </Typography>
                <Box component="ul" className="team__social" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {team.social.map((item, index) => (
                        <li key={index} style={{ margin: '0 10px' }}>
                            <a href={item.link} target="_blank" rel="noreferrer" className='team__icon'>
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TeamCard;