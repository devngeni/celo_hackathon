import React, { useState } from 'react'
import './swappage.css'
import Arrow from '../../assets/arrowdown.png';
import Popup from './Popup.js'



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
        <div className='container-'>
            <div className='swap-page'>
                <div className='register-top-vector3'></div>
                <header className='header'>
                    SWAP CRYPTO
                </header>
                <div className='header-buyCrypto'>
                    BUY_CRYPTO
                </div>
                <div className='balance-text'>Balance</div>
                <div className='account_box'>
                </div>
                <div className='green_circle'>
                </div>
                <div className='ksh'>
                </div>
                <div className='ksh-from'>
                    from
                </div>
                <div className='ksh_text'>KSH</div>
                <div className='ksh-amount'>Amount</div>
                <div><input type="text" placeholder="0" className="input-ksh-amount" value={value}
                    onChange={handleChange} /></div>
                <div className='arrow_circle'>
                    <image className='arrow-icon'>
                        <img src={Arrow} alt="arrowdown"></img>
                    </image>
                </div>
                <div className='toCUSD'></div>
                <div className='to-Text'>To</div>
                <div className='CUSD-text'>CUSD</div>
                <div className='cUSD-amount'>Amount</div>
                <div><input type="text" placeholder="0" className="input-CUSD-amount" value={valueA}
                    onChange={handleChangeA} /></div>
                <Popup />
                <button className='reset_button'>Reset</button>
            </div>
        </div>
    )
}

export default BuyCrypto
