import React from 'react'
import './register.css'
import '../login/login.css'
import { Link } from 'react-router-dom'
import bg from '../../assets/celo.png'


function Register() {
    return (
        <div className='container-B'>
            <div className='container-image'>
                <image className='bg-image'>
                    <img src={bg} alt='celo'></img>
                </image>
            </div>
            <div className='container-'>
                <div className='register-top-vector3'></div>
                <header className='register_header'>
                    SWAP CRYPTO
                </header>
                <div>

                    <input type="text" placeholder='   user name' className="register-username" />
                </div>
                <div >
                    <input type="text" placeholder="   Phone number" className='register-phnumber' />
                </div>
                <div>
                    <input type="text" placeholder="   E-mail" className="register-email" />
                </div>
                <div>
                    <input type="text" placeholder="   password" className="register-password" />
                </div>
                <div className='button-container'>
                    <div><Link to='/'> <button className='button' /></Link></div>
                    <div className='register-text'>Register</div>
                </div>
            </div>
            <div className='lg-container'>
                <div className='log-text'>Already have an account?</div>
                <a href='/'><button className='log-btn'>Sign-in</button></a>

            </div>
        </div>
    )
}
export default Register