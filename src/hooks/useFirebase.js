import { useState, useEffect } from "react";
import axios from 'axios';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile,
    getIdToken,
    signOut
} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";

// Redux
import { useDispatch } from 'react-redux';
import { getUserFailed, getUserSuccess, logoutSuccess } from "../redux/auth/authActions";

// Toastify
import { errorNotify, successNotify } from '../utils/toastify';

initializeFirebase();


export const useFirebase = () => {
    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        photo: '',
        token: '',
        isAdmin: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Sign Up with email and password
    const signUpWithEmailPassword = (name, email, password, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // save user info
                setUserInfo({
                    ...userInfo,
                    displayName: name,
                    email: email
                })

                // Save User To Database
                const userData = {
                    displayName: name,
                    email: email,
                }

                saveUserToDb(userData);
                setAdmin(userData);

                navigate('/')
                successNotify('Registration Successful');

                // Update user profile to Firebase
                updateProfile(auth.currentUser, userData).then(() => {

                }).catch((error) => {
                    console.log(error)
                });

                setError('');
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    };

    // Sign In with email and password
    const signInWithEmailPassword = (email, password, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUserInfo({
                    ...userInfo,
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })

                // Save User To Database
                saveUserToDb(user);
                navigate('/profile')

                successNotify('Successfully Logged In');

                setError('');
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
                errorNotify(error.message);
            });
    }


    // Google Sign In
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                setUserInfo({
                    ...userInfo,
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })

                // Save User To Database
                saveUserToDb(user);

                setError('');
                setLoading(false);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    }

    // Sign In with Facebook
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUserInfo({
                    ...userInfo,
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })

                // Save User To Database
                saveUserToDb(user);

                setError('');
                setLoading(false);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    }

    // Sign In with Github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUserInfo({
                    ...userInfo,
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })

                // Save User To Database
                saveUserToDb(user);

                setError('');
                setLoading(false);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    }

    // Sign Out
    const signOutController = () => {
        signOut(auth).then(() => {
            localStorage.removeItem('charitAble-user');
            dispatch(logoutSuccess());
        }).catch((error) => {
            setError(error.message);
            errorNotify(error.message);
        });
    }

    // Check Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // console.log(user);
                setUserInfo({
                    ...userInfo,
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })

                // Set AccessToken
                setIdToken(user);

                setLoading(false);
            } else {
                setLoading(false);
                dispatch(getUserFailed(error.message))
            }
        });
        return () => unsubscribe();
    }, []);


    // Set the user access token  
    const setIdToken = (user) => {
        getIdToken(user)
            .then((idToken) => {
                setUserInfo({ ...userInfo, token: idToken });

                setAdmin(user, idToken);
            })
    }

    const setAdmin = async (user, idToken = '') => {
        const userData = {
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL,
            token: idToken ? idToken : '',
            isAdmin: false
        }
        const res = await axios.get(`https://charit-able-api.herokuapp.com/users/${user.email}`);
        if (res.data?.role === 'admin') {
            userData.isAdmin = true;
            localStorage.setItem('charitAble-user', JSON.stringify(userData));
            dispatch(getUserSuccess(userData));
        } else {
            localStorage.setItem('charitAble-user', JSON.stringify(userData));
            dispatch(getUserSuccess(userData));
        }
    }

    // Save User to DataBase
    const saveUserToDb = async (user) => {
        try {
            const { data } = await axios.post('https://charit-able-api.herokuapp.com/users/create', { name: user.displayName, email: user.email });

        } catch (error) {
            console.log(error);
        }
    }

    return {
        loading,
        setLoading,
        error,
        setError,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        signOutController
    }
}
