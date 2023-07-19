import React from 'react'
import { Logout } from '@mui/icons-material'
import { useNavigate, NavLink } from 'react-router-dom'

export default function NavOrdre() {

    const navig = useNavigate()
    const logout = () => {
        navig('/')
    }

    return (
        <nav>
            <div className="top">
                <span>DashBoard Ordonnance et Plannification</span>
            </div>
            <div className="center">
                <ul>

                    <li>
                        <NavLink to='/ordonancement_plannification/accueil' className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ordonancement_plannification/nouveau' className={({ isActive }) => isActive ? "active" : ""}>Nouveaux Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ordonancement_plannification/assigne' className={({ isActive }) => isActive ? "active" : ""}>Projets Assignés</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ordonancement_plannification/travaux_programme' className={({ isActive }) => isActive ? "active" : ""}>Projet Programmé</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ordonancement_plannification/travaux_en_cours' className={({ isActive }) => isActive ? "active" : ""}>Travaux en cours</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ordonancement_plannification/travaux_termine' className={({ isActive }) => isActive ? "active" : ""}>Travaux Terminés</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ordonancement_plannification/projet_termine' className={({ isActive }) => isActive ? "active" : ""}>Projets Terminés</NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <span onClick={logout}>EXIT</span>
                <Logout className='icon' onClick={logout} />
            </div>
        </nav>
    )
}
