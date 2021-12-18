import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// Redux
import { useSelector } from 'react-redux';
// MUI
import { Container, Grid } from '@mui/material';
// React Icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// Components
import UserMenu from '../UserMenu/UserMenu';
import logo from '../../assets/images/logo.png';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const user = useSelector((state) => state.auth.user);

    return (
        <header className={styles.header}>
            <Container fixed>
                <Grid container sx={{
                    alignItems: 'center'
                }}>
                    <Grid item xs={8} md={3}>
                        <Link to='/' style={{ position: "relative", width: "100%", display: 'block', maxWidth: '170px', paddingBottom: '20%' }}>
                            <img
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={4} md={9}>
                        <nav className={menuOpen ? `${styles.navbar} ${styles.navbar__active}` : styles.navbar}>
                            <ul className={styles.main__menu}>
                                <li className={styles.menu__item} onClick={() => setMenuOpen(false)}>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className={styles.menu__item} onClick={() => setMenuOpen(false)}>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className={styles.menu__item} onClick={() => setMenuOpen(false)}>
                                    <Link to="/cases">
                                        Cases
                                    </Link>
                                </li>
                                <li className={styles.menu__item} onClick={() => setMenuOpen(false)}>
                                    <Link to="/blogs" >
                                        Blog
                                    </Link>
                                </li>
                                <li className={styles.menu__item} onClick={() => setMenuOpen(false)}>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                {user?.email || user?.displayName ? (
                                    <li className={styles.menu__item}>
                                        <UserMenu setMenuOpen={setMenuOpen} />
                                    </li>
                                ) : (
                                    <li className={styles.menu__item} onClick={() => setMenuOpen(false)}>
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                )}

                            </ul>

                            {/* Toggle Menu Close */}
                            <span className={styles.menu__close} onClick={() => setMenuOpen(false)}>
                                <AiOutlineClose />
                            </span>
                        </nav>

                        {/* Toggle Menu Open */}
                        <span className={styles.menu__open} onClick={() => setMenuOpen(!menuOpen)}>
                            <AiOutlineMenu />
                        </span>
                        <div className={menuOpen ? `${styles.menu__overlay} ${styles.menu__overlay_active}` : styles.menu__overlay} onClick={() => setMenuOpen(false)}></div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};

export default Header;