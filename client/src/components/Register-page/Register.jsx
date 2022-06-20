import React from 'react'
import './register.css'
import '../login/login.css'
import { Link } from 'react-router-dom'
import bg from '../../assets/celo.png'


function Register() {
    return (
        <div className='container-'>
            <div>
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
                    <div><Link to='/swap'> <button className='button' /></Link></div>
                    <div className='register-text'>Register</div>
                </div>
            </div>
        </div>
    )
}
export default Register