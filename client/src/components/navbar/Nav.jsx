import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {

    return (
        <nav className='header-buy-Transfer'>
            <div>
                <Link to="/swap" className='active'><button className='buy-button'>Buy</button></Link>
            </div>
            <div>
                <Link to="/transfer"><button className='transfer-button'>Transfer</button></Link>
            </div>
        </nav>
    )
}

export default Nav
