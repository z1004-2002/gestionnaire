import React, { useEffect, useState } from 'react'
import { Logout } from '@mui/icons-material'
import {  useNavigate } from 'react-router-dom'
import "./../../styles/dashboard.css"
import NavController from './../../components/NavController'

export default function DashboardController() {
    const [count,setCount] = useState({
        "new_project": 0,
        "assign_project": 0,
        "programme_project": 0,
        "work_in_progress": 0,
        "work_end": 0,
        "end_project": 0
    })
    const navig = useNavigate()

    const logout = () => {
        navig('/')
    }

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:4000/projet/count", requestOptions)
            .then(response => response.text())
            .then(result => setCount(JSON.parse(result)))
            .catch(error => console.log('error', error));
    },[])

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
                            <span>{count.new_project}</span>
                        </div>
                        <div className="line">
                            <span>Projets assignés aux techniciens</span>
                            <span>{count.assign_project}</span>
                        </div>
                        <div className="line">
                            <span>Projets programmés</span>
                            <span>{count.programme_project}</span>
                        </div>
                        <div className="line">
                            <span>Travaux en cours</span>
                            <span>{count.work_in_progress}</span>
                        </div>
                        <div className="line">
                            <span>Travaux Terminés</span>
                            <span>{count.work_end}</span>
                        </div>
                        <div className="line">
                            <span>Projet Terminés</span>
                            <span>{count.end_project}</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
