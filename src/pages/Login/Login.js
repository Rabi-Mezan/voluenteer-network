import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../resources/logos/Group 1329.png'
import './Login.css'

const Login = () => {
    const { googleSignIn } = useFirebase()
    const location = useLocation();

    const history = useHistory()
    const redirectUrl = location.state?.from;

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(() => {
                history.push(redirectUrl)
            })
    }

    return (
        <div className='login mt-5'>
            <div className='logo'>
                <img className='w-100 h-50' src={logo} alt="" />
            </div>
            <div className='login-box'>
                <h4 className='fw-bold'>Login With</h4>
                <button onClick={handleGoogleSignin}> <i class="fab fa-google me-5"></i>Continue With Google</button>
                <p> <small>Don't have an account ? <Link>Create one</Link></small></p>
            </div>
        </div>
    );
};

export default Login;