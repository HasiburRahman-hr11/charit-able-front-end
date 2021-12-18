import { useSelector } from 'react-redux';
import { Container, Grid, Box } from '@mui/material';

// Components
import SectionHeader from '../SectionHeader/SectionHeader';
import BlogCard from '../BlogCard/BlogCard';


const BlogSection = () => {
    
    const { blogs } = useSelector(state => state.blogs)

    return (
        <Box component="section" className='section blog__section' sx={{
            padding: '100px 0'
        }}>
            <Container fixed>
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
            </Container>
        </Box>
    );
};

export default BlogSection;