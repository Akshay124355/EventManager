import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./home.scss"

const Home = () => {
    return (
        <div className="header-style-wrapper">
            <div className="header-container">
                <div className="title">
                    <h1>Event Manager</h1>
                </div>
                <div className="header-tabs">
                    <div className="event-data">
                        <Link to='eventdata' className='link'>
                            <h4>Event Data</h4>
                        </Link>
                    </div>
                    <div className="event-form">
                        <Link to="eventform" className='link'>
                            <h4>Add New Event</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Home