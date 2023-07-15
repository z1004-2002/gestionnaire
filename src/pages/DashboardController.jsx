import { Logout } from '@mui/icons-material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./../styles/dashboard.css"

export default function DashboardController() {
    const navig = useNavigate()

    const logout = () => {
        navig('/')
    }

    return (
        <div className='dashboard'>
            <nav>
                <div className="left">
                    <span>DashBoard Controller</span>
                </div>
                <div className="center">
                    <ul>
                        <li>
                            <NavLink to='/controller' className={({ isActive }) => isActive ? "active" : ""}>Menu 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Menu 2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Menu 3</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Menu 4</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Menu 5</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <span>xxxxxxxxx@gmail.com</span>
                    <Logout className='icon' onClick={logout}/>
                </div>
            </nav>
            <main>
                <div className="content">
                    <p className="title"></p>
                </div>
            </main>
        </div>
    )
}
