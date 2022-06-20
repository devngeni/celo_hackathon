import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/login.jsx'
import Registerpage from './components/Register-page/Register.jsx';
import Swappage from './components/Swap-page/Swappage.jsx';
import Transfer from './components/transfer-page/Transferpage'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Registerpage />} />
                <Route path="/swap" element={<Swappage />} />
                <Route path="/transfer" element={<Transfer />} />
            </Routes>
        </>
    )
}

export default App;
