import React from 'react';

import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useFirebase } from '../../hooks/useFirebase';

const SignInMethods = () => {
    const {
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub } = useFirebase();

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }

    return (
        <ul className="auth__alter">
            <li>
                <button type='button' className='google__btn' onClick={handleGoogleSignIn}>
                    <AiOutlineGoogle />
                </button>
            </li>
            <li>
                <button type='button' className='facebook__btn' onClick={handleFacebookSignIn}>
                    <FaFacebookF />
                </button>
            </li>
            <li>
                <button type='button' className='github__btn' onClick={handleGithubSignIn}>
                    <AiFillGithub />
                </button>
            </li>
        </ul>
    );
};

export default SignInMethods;