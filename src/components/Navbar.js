import React from 'react'
import '../index.css'
import Icon from '../assets/icon.svg'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { user, logOut } = UserAuth();

    return (
        <div className='navbar'>
            <div className='navbar-main'>
                <img src={Icon} alt="" />
                <div className='navbar-left'>
                    <h2>CODEPEN</h2>
                    <p>welcome to my pen</p>
                </div>
            </div>
            <div className='navbar-right'>
                <div className='navbar-userDetails'>
                    <img src={user.photoURL} alt="" />
                    <div>
                        <h3>{user.displayName}</h3>
                        <Link to='/'>
                            <button onClick={() => logOut()}>Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar