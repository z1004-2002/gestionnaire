import React from 'react'
import { Logout } from '@mui/icons-material'
import {  useNavigate } from 'react-router-dom'
import "./../../styles/dashboard.css"
import NavController from './../../components/NavController'

export default function DashboardController() {
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
                        ACCUEIL
                    </div>
                    <div className="right">
                        <span>xxxxxxxxxxxx@gmail.com</span>
                        <Logout className='icon' onClick={logout} />
                    </div>
                </header>
                <div className="content">
                    <div className="recap">
                        <div className="line">
                            <span>Nouveaux Projets</span>
                            <span>34</span>
                        </div>
                        <div className="line">
                            <span>Projets assignés aux techniciens</span>
                            <span>22</span>
                        </div>
                        <div className="line">
                            <span>Projets programmés</span>
                            <span>34</span>
                        </div>
                        <div className="line">
                            <span>Travaux en cours</span>
                            <span>9</span>
                        </div>
                        <div className="line">
                            <span>Travaux Terminés</span>
                            <span>13</span>
                        </div>
                        <div className="line">
                            <span>Projet Terminés</span>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
