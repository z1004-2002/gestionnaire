import React from 'react'
import { Logout } from '@mui/icons-material'
import {  useNavigate } from 'react-router-dom'
import "./../../styles/dashboard.css"
import NavController from './../../components/NavController'

export default function ContTravCours() {
  const navig = useNavigate()

    const logout = () => {
        navig('/')
    }

  return (
    <div className='dashboard'>
            <NavController/>
            <main>
                <header>
                    <div className="left">
                        Travaux En Cours
                    </div>
                    <div className="right">
                        <span>xxxxxxxxxxxx@gmail.com</span>
                        <Logout className='icon' onClick={logout} />
                    </div>
                </header>
                <div className="content">
                    
                </div>
            </main>
        </div>
  )
}
