import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { googleSignIn, user } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate();

    if (user) {
        navigate('/home')
    } else {
        console.log('no user')
    }

    return (
        <div className='login'>
            <p>CODEPEN.io</p>
            <button onClick={handleGoogleSignIn}>Login using GOOGLE</button>
        </div>
    )
}

export default Login;