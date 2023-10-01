import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
    return (
        <div className='container'>
            <div>
                <h1>
                    Services Page
                </h1>
            </div>
            <nav>
                <Link className='btn btn-primary m-5'
                    to='websites'>
                    Our Websites
                </Link>
                <Link className='btn btn-primary m-5'
                    to='webapps'>
                    Our Web Apps
                </Link>
                <Link className='btn btn-primary m-5'
                    to='mobileapps'>
                    Our Mobile Apps
                </Link>
            </nav>
            <Outlet />
        </div>


    )
}

export default Services