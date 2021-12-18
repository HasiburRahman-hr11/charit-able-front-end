import { useSelector } from 'react-redux';
import { Grid, Container, Box } from '@mui/material'

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import MissionSection from '../../components/MissionSection/MissionSection';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Loading from '../../components/Loading/Loading';
import CaseCard from '../../components/CaseCard/CaseCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Cases = () => {

    const { cases, isFetching } = useSelector(state => state.cases)
    if (isFetching) {
        return <Loading />
    }

    return (
        <>
          <Header />
            <PageBanner
                title="Our Cases"
                bannerBg="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="Cases"
            />
            <MissionSection />

            <Box component="div" sx={{
                padding: '100px 0'
            }}>
                <Container fixed>
                    {cases.length > 0 ? (
                        <>
                            <SectionHeader
                                title="Popular Cases What You Should Know"
                                subtitle="Our Cases?"
                            />
                            <Grid container spacing={4} sx={{
                                marginTop: '50px'
                            }}>
                                {cases.map(item => (
                                    <Grid item xs={12} sm={6} md={4} key={item._id}>
                                        <CaseCard data={item} />
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    ) : (
                        <Box component="div" className="title" sx={{
                            padding: '50px 0',
                            textAlign: 'center',
                            color: 'var(--title-color)',
                            fontSize: '30px'
                        }}>
                            No Case added yet.
                        </Box>
                    )}
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Cases;