import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import './index.css'


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
    <>
    <div className={`modal ${isOpen ? 'active' : ''}`}>
        <div className="modal-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis aspernatur corrupti officia animi doloremque.</p>
        <span className="close" onClick={handleOpen}>
        <IoMdClose/>
        </span>
        </div>
    </div>
    <button onClick={handleOpen}>Open Modal</button>
    </>
  )
}

export default Modal