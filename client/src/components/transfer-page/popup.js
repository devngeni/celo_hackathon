import React, { useState } from "react";
import Modal from "./Modal"
import './Modal.css'

function Popup() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <button onClick={() => setOpenModal(true)}
                className='swap-button' >
                Swap
            </button>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)} />
        </div >
    )
}

export default Popup