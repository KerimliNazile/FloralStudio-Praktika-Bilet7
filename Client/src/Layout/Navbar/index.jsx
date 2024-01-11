import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="Navbar">
                    <div className="FloralNav">
                        <h1>Floral Studio</h1>
                        
                    </div>
                    <div className="MainNav">
                        <ul className='NavArea'>
                            <li><NavLink to={"/home"}>Home</NavLink></li>
                            <li><NavLink to={"/about"}>About Us</NavLink></li>
                            <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                            <li><NavLink to={"/pricing"}>Pricing</NavLink></li>
                            <li><NavLink to={"/contacts"}>Contacts</NavLink></li>
                            <li><NavLink to={"/add"}> Add Page</NavLink></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
