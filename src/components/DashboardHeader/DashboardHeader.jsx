import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './DashboardHeader.module.css'
import { Box, Container, Grid } from '@mui/material';

// React Icons
import { AiOutlineMenu, AiOutlineClose, AiFillFileAdd } from 'react-icons/ai';
import { FaKhanda, FaBloggerB, FaUserAlt, FaDonate } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md'
import { useFirebase } from '../../hooks/useFirebase';

import logo from '../../assets/images/logo.png';

const DashboardHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Firebase functions
    const { signOutController } = useFirebase();

    return (
        <Box component="header" className={styles.dashboard__header}>
            <Container fixed>
                <Grid container>
                    <Grid item xs={8} md={6}>
                        <Link to="/" style={{display:'block', maxWidth:'170px'}}>
                            <img src={logo} alt="Logo" className={styles.logo} />
                        </Link>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ul className={styles.dashboard__menu}>
                            <li>
                                <span className={styles.menu__open} onClick={() => setMenuOpen(!menuOpen)}>
                                    <AiOutlineMenu />
                                </span>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>

            <div className={menuOpen ? `${styles.dashboard__sidebar} ${styles.active}` : styles.dashboard__sidebar}>
                <ul className={styles.dashboard__sidebar_menu} >
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/dashboard/cases">
                            <span className={styles.list__icon}><FaKhanda /></span> Cases
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/dashboard/cases/add">
                            <span className={styles.list__icon}><AiFillFileAdd /></span> Add Case
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/dashboard/donations">
                            <span className={styles.list__icon}><FaDonate /></span> Donations
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/dashboard/blogs">
                            <span className={styles.list__icon}><FaBloggerB /></span> Blogs
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/dashboard/blogs/add">
                            <span className={styles.list__icon}><AiFillFileAdd /></span> Add Blog
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link to="/dashboard/users">
                            <span className={styles.list__icon}><FaUserAlt /></span> Users
                        </Link>
                    </li>
                    <li onClick={() => {
                        setMenuOpen(false);
                        signOutController();
                    }}>
                        <div>
                            <span className={styles.list__icon}><MdExitToApp /></span>
                            Logout
                        </div>
                    </li>
                </ul>

                <span className={styles.menu__close} onClick={() => setMenuOpen(false)}>
                    <AiOutlineClose />
                </span>
            </div>

            <div className={menuOpen ? `${styles.menu__overlay} ${styles.menu__overlay_active}` : styles.menu__overlay} onClick={() => setMenuOpen(false)}></div>
        </Box>
    );
};

export default DashboardHeader;