import React from 'react'
import './login.css'
import { Link } from "react-router-dom";
import bg from '../../assets/celo.png'

const login = () => {
    return (
        <div className='container-'>
            <div>
                <image className='bg-image'>
                    <img src={bg} alt='celo'></img>
                </image>
            </div>
            <div className='login-header'>
                SWAP CRYPTO
            </div>
            <div >
                <input type='text' placeholder='    user name' className='input-phoneNo' />
            </div>
            <div >
                <input type='text' placeholder='    password' className='input-password' />
            </div>
            <div className='login-text'>Login</div>
            <Link to='/transfer'>
                <button className='login' ></button>
            </Link>
            <div className='reg'>
                <div className='reg-text'>Don’t have an account?</div>
                <Link to='/register'>
                    <button className='reg-btn'> Register</button>
                </Link>
            </div>

        </div>
    )
}

export default login;