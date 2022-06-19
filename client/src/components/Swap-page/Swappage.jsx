import React, { useState } from 'react'
import './swappage.css'
import Popup from './Popup.js'
import Navbar from '../navbar/Nav'



function BuyCrypto() {
    const [value, setValue] = useState('');
    const [valueA, setValueA] = useState('');


    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    };
    const handleChangeA = event => {
        const result = event.target.value.replace(/\D/g, '');
        setValueA(result);
    };
    return (
        <div className='container-D'>
            <header className='header_name'>
                SWAP CRYPTO
            </header>
            <div className='Home-Profile-btn'>
                <button className='profile'>profile</button>
            </div>


            <Navbar /> {/*displays the buy and trasfer buttons*/}

            <div className='account_box'>
                <div className='green_circle' />
                <div className='account_box-text'>Account</div>
                <div>
                    <input type='text' placeholder='0x4hy...jkilmn67' className='input_address_text' />
                </div>
                <div className='acc-balance'>Balance</div>
                <div><input type='text' placeholder='20 cusd' className='acc-balance-txt' /></div>
            </div>

            <div className='ksh'>
                <div className='ksh_text'>KSH</div>
                <div className='ksh-from'>from</div>
                <div className='ksh-amount'>Amount</div>
                <div><input type="text" placeholder="0" className="input-ksh-amount" value={value}
                    onChange={handleChange} /></div>
            </div>

            <div className='toCUSD'>
                <div className='to-Text'>To</div>
                <div className='CUSD-text'>CUSD</div>
                <div className='cUSD-amount'>Amount</div>
                <div><input type="text" placeholder="0" className="input-CUSD-amount" value={valueA}
                    onChange={handleChangeA} /></div>
            </div>

            <Popup />
        </div>
    )
}

export default BuyCrypto
