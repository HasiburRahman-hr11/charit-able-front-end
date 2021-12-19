import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import convertToBase64 from '../../utils/convertToBase64';
import { Container, Typography, Box, Grid } from '@mui/material';
import PageBanner from '../../components/PageBanner/PageBanner';
import Loading from '../../components/Loading/Loading';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const styles = {
    title: {
        fontSize: '28px',
        color: 'var(--title-color)',
        marginTop: '25px',
        marginBottom: '35px',
        fontWeight: '600',
        fontFamily: "'Oswald', sans-serif"
    },
}

const SingleBlog = () => {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const { data } = await axios.get(`https://charit-able-api.herokuapp.com/blogs/${params.blogId}`);
                setBlog(data);
                setLoading(false);
            } catch (error) {
                console.log();
                setLoading(false);
            }
        }
        if (params.blogId) {
            getBlog();
        }
    }, [params.blogId]);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Header />
            <PageBanner
                title="Our Blog"
                bannerBg="https://images.pexels.com/photos/6918509/pexels-photo-6918509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb={blog?.title}
            />
            <Box component="div" sx={{
                padding: '70px 0'
            }}>
                <Container fixed>
                    <Grid container spacing={5}>
                        <Grid item md={8} xs={12}>
                            <article>
                                {blog.thumbnail && (
                                    <img src={`data:image/png;base64,${convertToBase64(blog.thumbnail.data)}`} alt={blog.title} />
                                )}
                                <Typography variant="h2" component="h2" sx={styles.title}>
                                    {blog?.title}
                                </Typography>

                                <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                            </article>
                        </Grid>
                        <Grid item md={4} xs={12} sx={{
                            display: {
                                md: 'block',
                                xs: 'none'
                            }
                        }}>
                            <aside>
                                <h2>Sidebar</h2>
                            </aside>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default SingleBlog;