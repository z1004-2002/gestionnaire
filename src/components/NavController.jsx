import React from 'react'
import { Logout } from '@mui/icons-material'
import { useNavigate, NavLink } from 'react-router-dom'

export default function NavController() {

    const navig = useNavigate()
    const logout = () => {
        navig('/')
    }

    return (
        <nav>
            <div className="top">
                <span>DashBoard Controller</span>
            </div>
            <div className="center">
                <ul>

                    <li>
                        <NavLink to='/controller/accueil' className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controller/nouveau' className={({ isActive }) => isActive ? "active" : ""}>Nouveaux Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controller/assigne' className={({ isActive }) => isActive ? "active" : ""}>Projets Assigné</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controller/travaux_programme' className={({ isActive }) => isActive ? "active" : ""}>Projet Programmé</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controller/travaux_en_cours' className={({ isActive }) => isActive ? "active" : ""}>Travaux en cours</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controller/travaux_termine' className={({ isActive }) => isActive ? "active" : ""}>Travaux Terminés</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controller/projet_termine' className={({ isActive }) => isActive ? "active" : ""}>Projet Terminé</NavLink>
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
