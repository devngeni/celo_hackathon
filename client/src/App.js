import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/login.jsx'
import Registerpage from './components/Register-page/Register.jsx';
import Homepage from './BuySellTransfer'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Registerpage />} />
                <Route path="/Home" element={<Homepage />} />
            </Routes>
        </>
    )
}

export default App;
