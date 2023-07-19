import React from 'react'
import { Logout } from '@mui/icons-material'
import { useNavigate, NavLink } from 'react-router-dom'

export default function NavChef() {

    const navig = useNavigate()
    const logout = () => {
        navig('/')
    }

    return (
        <nav>
            <div className="top">
                <span>DashBoard Chef d'Exploitation</span>
            </div>
            <div className="center">
                <ul>

                    <li>
                        <NavLink to='/chef_exploitation/accueil' className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chef_exploitation/nouveau' className={({ isActive }) => isActive ? "active" : ""}>Nouveaux Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chef_exploitation/assigne' className={({ isActive }) => isActive ? "active" : ""}>Projets Assignés</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chef_exploitation/travaux_programme' className={({ isActive }) => isActive ? "active" : ""}>Projet Programmé</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chef_exploitation/travaux_en_cours' className={({ isActive }) => isActive ? "active" : ""}>Travaux en cours</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chef_exploitation/travaux_termine' className={({ isActive }) => isActive ? "active" : ""}>Travaux Terminés</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chef_exploitation/projet_termine' className={({ isActive }) => isActive ? "active" : ""}>Projets Terminés</NavLink>
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
