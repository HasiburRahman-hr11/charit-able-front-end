import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, CircularProgress } from '@mui/material';

import { MdAddPhotoAlternate } from 'react-icons/md'

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import RichEditor from "../../components/RichEditor/RichEditor";
import AdminRoute from "../../utils/AdminRoute";
import Loading from "../../components/Loading/Loading";
import convertToBase64 from "../../utils/convertToBase64";
import { updateCase } from "../../redux/cases/apiCalls";

import placeholder from '../../assets/images/thumbnail.png';


const styles = {
    formWrapper: {
        maxWidth: '850px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: {
            md: '40px 30px',
            xs: '30px 20px'
        },
        border: '1px solid #ddd',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
    },
    title: {
        color: 'var(--primary-color)',
        fontSize: '25px',
        marginBottom: '30px',
        textAlign: 'center'
    }
}

const EditCase = () => {

    const [title, setTitle] = useState('');
    const [defaultValue, setDefaultValue] = useState('');
    const [description, setDescription] = useState(null);
    const [thumbnail, setThumbnail] = useState('');
    const [thumbnailPreview, setThumbnailPreview] = useState('');
    const [base64Thumb, setBase64Thumb] = useState('');

    const [loading, setLoading] = useState(true);

    const params = useParams();
    const dispatch = useDispatch();
    const { isFetching } = useSelector(state => state.cases);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);

        if (thumbnail) {
            formData.append('thumbnail', thumbnail);
        }

        updateCase(dispatch, params.caseId, formData);
    }
    const handleThumbnailChange = (e) => {
        setBase64Thumb('')
        setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
        setThumbnail(e.target.files[0]);
    }

    useEffect(() => {
        const getCase = async () => {
            try {
                const { data } = await axios.get(`https://charit-able-api.herokuapp.com/cases/${params.caseId}`);
                setTitle(data.title);
                setDefaultValue(data.description);
                setDescription(data.description);
                if (data?.thumbnail) {
                    setBase64Thumb(convertToBase64(data.thumbnail.data))
                }
                setLoading(false);
            } catch (error) {
                console.log();
                setLoading(false);
            }
        }
        if (params.caseId) {
            getCase();
        }
    }, [params.caseId]);

    if (loading) {
        return <Loading />
    }

    return (
        <AdminRoute>
            <DashboardHeader />

            <Box component="div" sx={{
                paddingTop: '110px',
                paddingBottom: '40px',
            }}>
                <Container fixed>
                    <Typography variant="h3" component="h3" className="title" sx={styles.title}>
                        Edit Case
                    </Typography>

                    <Box component="div" sx={styles.formWrapper}>
                        <form onSubmit={submitHandler}>
                            <div className="input__group">
                                <label htmlFor="title" className="admin__label">Case Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="admin__input"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="input__group">
                                <label htmlFor="title" className="admin__label">Case Description</label>
                                <RichEditor
                                    setValue={setDescription}
                                    defaultValue={defaultValue}
                                />
                            </div>

                            <Box component="div" sx={{
                                marginBottom: '30px'
                            }}>
                                <div>
                                    {base64Thumb ? (
                                        <img src={`data:image/png;base64,${base64Thumb}`} alt="Thumbnail" className="admin__thumb_preview" />
                                    ) : (
                                        <img src={thumbnailPreview ? thumbnailPreview : placeholder} alt="Thumbnail" className="admin__thumb_preview" />
                                    )}

                                </div>
                                <Box component="div" sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center'
                                }}>
                                    <label htmlFor="thumbnail" className="admin__add_thumbnail">
                                        <span><MdAddPhotoAlternate /></span> {thumbnailPreview || base64Thumb ? 'Change' : 'Thumbnail'}
                                    </label>
                                    {(thumbnailPreview || base64Thumb) && (
                                        <button type="button" className="admin__remove_thumbnail" onClick={() => {
                                            setThumbnail('');
                                            setThumbnailPreview('');
                                            setBase64Thumb('');
                                        }}>Remove</button>
                                    )}
                                </Box>
                                <input type="file" name="thumbnail" id="thumbnail" className="admin__image_input" hidden onChange={handleThumbnailChange} />
                            </Box>


                            <button type="submit" className="btn__primary" style={{ maxHeight: '45px', width: '120px' }}>
                                {isFetching ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '25px !important',
                                    height: '25px !important'
                                }} /> : 'Submit'}
                            </button>
                        </form>
                    </Box>
                </Container>
            </Box>

        </AdminRoute>
    );
};

export default EditCase;
