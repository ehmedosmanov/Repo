import {useState} from 'react'
import { FaBars } from "react-icons/fa";
import './index.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }
  return (
    <nav id='nav'>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <ul className={`navbar-items ${isOpen ? 'active' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
        </ul>
        <div className="bar" onClick={handleOpen}>
        <FaBars />
        </div>
    </nav>
  )
}

export default Navbar