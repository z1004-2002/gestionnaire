import React, { useState } from 'react'
import { Edit, Logout, Visibility } from '@mui/icons-material'
import {  useNavigate } from 'react-router-dom'
import "./../../styles/dashboard.css"
import NavController from './../../components/NavController'


const test = [
  {
    numero:1,
    date_creation:"10-09-2023",
    ville:"Yaoundé",
    quartier:'Emana',
    gps:"41.40338, 2.17403"
  },
  {
    numero:2,
    date_creation:"10-06-2023",
    ville:"Douala",
    quartier:'Bonaberi',
    gps:"41.40338, 2.17403"
  },
  {
    numero:3,
    date_creation:"19-05-2023",
    ville:"Bafoussam",
    quartier:'Not',
    gps:"41.40338, 2.17403"
  },
  {
    numero:4,
    date_creation:"10-03-2023",
    ville:"Yaoundé",
    quartier:'Ngoa',
    gps:"41.40338, 2.17403"
  },
  {
    numero:5,
    date_creation:"10-12-2023",
    ville:"Douala",
    quartier:'PK-17',
    gps:"41.40338, 2.17403"
  },
  {
    numero:6,
    date_creation:"10-09-2023",
    ville:"Yaoundé",
    quartier:'Emana',
    gps:"41.40338, 2.17403"
  },
  {
    numero:7,
    date_creation:"10-06-2023",
    ville:"Douala",
    quartier:'Bonaberi',
    gps:"41.40338, 2.17403"
  },
  {
    numero:8,
    date_creation:"19-05-2023",
    ville:"Bafoussam",
    quartier:'Not',
    gps:"41.40338, 2.17403"
  },
  {
    numero:9,
    date_creation:"10-03-2023",
    ville:"Yaoundé",
    quartier:'Ngoa',
    gps:"41.40338, 2.17403"
  },
  {
    numero:10,
    date_creation:"10-12-2023",
    ville:"Douala",
    quartier:'PK-17',
    gps:"41.40338, 2.17403"
  },  {
    numero:11,
    date_creation:"10-09-2023",
    ville:"Yaoundé",
    quartier:'Emana',
    gps:"41.40338, 2.17403"
  },
  {
    numero:12,
    date_creation:"10-06-2023",
    ville:"Douala",
    quartier:'Bonaberi',
    gps:"41.40338, 2.17403"
  },
  {
    numero:13,
    date_creation:"19-05-2023",
    ville:"Bafoussam",
    quartier:'Not',
    gps:"41.40338, 2.17403"
  },
  {
    numero:14,
    date_creation:"10-03-2023",
    ville:"Yaoundé",
    quartier:'Ngoa',
    gps:"41.40338, 2.17403"
  },
  {
    numero:15,
    date_creation:"10-12-2023",
    ville:"Douala",
    quartier:'PK-17',
    gps:"41.40338, 2.17403"
  }
]

export default function ContNew() {
  const navig = useNavigate()
  const [modal,setModal] = useState(true)

  const view = (item) => {
    console.log(item);
    setModal(true)
  }
  const edit = (item)=>{
    console.log(item)
    setModal(true)
  }

    const logout = () => {
        navig('/')
    }
  return (
    <div className='dashboard'>
      {modal && <div className="modal">

      </div>}
            <NavController/>
            <main>
                <header>
                    <div className="left">
                        Nouveaux Projets
                    </div>
                    <div className="right">
                        <span>xxxxxxxxxxxx@gmail.com</span>
                        <Logout className='icon' onClick={logout} />
                    </div>
                </header>
                <div className="content">
                    <table>
                      <thead>
                        <tr>
                          <th>Numéro</th>
                          <th>Date De Création</th>
                          <th>Ville</th>
                          <th>Quartier</th>
                          <th>Coordonnée GPS</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {test.map((proj,idx)=><tr key={idx} className={idx%2===0? 'a':'b'}>
                          <td>{proj.numero}</td>
                          <td>{proj.date_creation}</td>
                          <td>{proj.ville}</td>
                          <td>{proj.quartier}</td>
                          <td>{proj.gps}</td>
                          <td>
                            <div className="actions">
                              <span className="btn btn-primary" onClick={()=>view(proj)}><Visibility/></span>
                              <span className="btn btn-danger" onClick={()=>edit(proj)}><Edit/></span>
                            </div>
                          </td>
                        </tr>)}
                      </tbody>
                    </table>
                </div>
            </main>
        </div>
  )
}
