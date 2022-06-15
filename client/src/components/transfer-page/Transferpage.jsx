import React, { useState } from 'react'
import './Transferpage.css'
import { Link } from "react-router-dom";

function Transfer() {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const result = e.target.value.replace(/\D/g, '');
        setValue(result);
    };
    return (
        <div className='container-'>
            <div className='transfer-page'>
            </div>
            <div className='logo-button'></div>
            <div className='header'>
                SWAP CRYPTO
            </div>
            <div className='sub-header'>
                Transfer
            </div>
            <div className='account-box'></div>
            <div className='account-box_text'>Account</div>
            <div className='account-logo'></div>
            <div>
                <input type='text' placeholder='0x4hy....jkilmn67' className='account-address_text'></input>
            </div>
            <div className='account-address-balance_text'>Balance</div>
            <div>
                <input type='text' placeholder='0 cUSD' className='account-balance_text'></input>
            </div>
            <div className='transfer-box'></div>
            <div className='amount-text'>Amount</div>
            <div className='transfer-text'>Transfer</div>
            <div className='Ksh-text'>KSH</div>
            <div>
                <input type='text' placeholder='0' className='amount-input' value={value} onChange={handleChange}></input>
            </div>
            <div className='recipient-box'></div>
            <div className='receiver-text'>To</div>
            <div>
                <input type='text' placeholder='input address' className='address-text' ></input>
            </div>
            <button className='swap-button' >Swap</button>
            <Link to='/'>
                <button className='reset-button'>Reset
                </button>
            </Link>
        </div>
    )
}

export default Transfer

