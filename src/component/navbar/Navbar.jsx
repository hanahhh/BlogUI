import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <h1>FOO<span>BLO</span></h1>
                    </div>
                    <div className="center">
                        <span>Home</span>
                        <span>Recipes</span>
                        <span>Pages</span>
                        <span>About Me</span>
                        <span>Blog</span>
                        <span>Contact</span>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="hit enter to search" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
