import { useSelector } from 'react-redux';
import { Grid, Container, Box } from '@mui/material'

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Loading from '../../components/Loading/Loading';
import BlogCard from '../../components/BlogCard/BlogCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Blogs = () => {
    const { blogs, isFetching } = useSelector(state => state.blogs)
    if (isFetching) {
        return <Loading />
    }
    return (
        <>
            <Header />
            <PageBanner
                title="Our Blog"
                bannerBg="https://images.pexels.com/photos/6918509/pexels-photo-6918509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="Blog"
            />
            <Box component="div" sx={{
                padding: '100px 0'
            }}>
                <Container fixed>
                    {blogs.length > 0 ? (
                        <>
                            <SectionHeader
                                title="Latest News"
                                subtitle="Our Blog"
                            />
                            <Box component="div" className='section__body' sx={{
                                marginTop: '70px'
                            }}>
                                <Grid container spacing={{ xs: 5, sm: 4 }}>
                                    {blogs.map(blog => (
                                        <Grid item xs={12} sm={6} md={4} key={blog._id}>
                                            <BlogCard blog={blog} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </>
                    ) : (
                        <Box component="div" className="title" sx={{
                            padding: '50px 0',
                            textAlign: 'center',
                            color: 'var(--title-color)',
                            fontSize: '30px'
                        }}>
                            No Blog added yet.
                        </Box>
                    )}
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Blogs;