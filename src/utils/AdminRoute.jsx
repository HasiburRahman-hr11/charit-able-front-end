import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import { useEffect } from 'react';

const AdminRoute = ({ children }) => {

    const { user, isFetching } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.isAdmin) {
            navigate('/login');
        }
    })

    if (isFetching) {
        return <Loading />
    }
    return (
        <>
            {children}
        </>
    );

};

export default AdminRoute;