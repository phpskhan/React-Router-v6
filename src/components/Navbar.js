import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="navbar-brand" src='/logo.png' width='150px' alt='' />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/product'>Product</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to='/services' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to='websites'>Website Development</Link>
                            <Link class="dropdown-item" to='webapps'>Web Apps Development</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to='mobileapps'>Mobile Apps Development</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar