import React, { useState, useEffect } from 'react'
import { Logout, Close, Visibility, Checklist } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import "./../../styles/dashboard.css"
import NavChef from './../../components/NavChef'
import vol from "./../../assets/vol.jpeg"


export default function ContTravTerm() {
  const [modal, setModal] = useState(false)
  const [projets, setProjets] = useState([])
  const [projet, setProjet] = useState({
    numero: 1,
    date_creation: "10-09-2023",
    ville: "Yaoundé",
    quartier: 'Emana',
    gps: "41.40338, 2.17403",
    type: "T1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at et molestiae quia sunt autem inventore reiciendis blanditiis deleniti nam.",
    tech: [{
      nom: "lorem",
      email: "lorem",
      numero: "lorem",
      entreprise: "lorem"
    },
    {
      nom: "lorem",
      email: "lorem",
      numero: "lorem",
      entreprise: "lorem"
    }],
    bon_achat: "",
    bon_commande: "",
    num_service: "",
    num_accord: "",
    date_travaux: "2023-06-28",
    date_fin_travaux: "2023-06-28"
  })
  const [modalSend, setModalSend] = useState(false)
  const [photo, setPhoto] = useState([vol])
  const navig = useNavigate()

  const getPhoto = () => {
    setPhoto([vol])
  }

  const view = (item) => {
    setProjet(item)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:4000/projet/images?numero=" + item.numero, requestOptions)
      .then(response => response.text())
      .then(result => {
        let a = JSON.parse(result)
        setPhoto(a)
      })
      .catch(error => console.log('error', error));
    setModal(true)
  }
  const complete = (item) => {
    setProjet(item)
    setModalSend(true)
  }
  const endProject = () => {
    var requestOptions = {
      method: 'PUT',
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/projet/terminer_projet?numero="+projet.numero, requestOptions)
      .then(response => response.text())
      .then(result => {
        let a = JSON.parse(result)
        if (a.numero) {
          window.location.reload()
        }
      })
      .catch(error => console.log('error', error));
  }
  const logout = () => {
    navig('/')
  }
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:4000/projet/5", requestOptions)
      .then(response => response.text())
      .then(result => setProjets(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div className='dashboard'>
      {modal && <div className="modal">
        <div className="modal-content">
          <Close className='close' onClick={() => setModal(false)} />
          <div className="head">
            PROJET {projet.numero}
          </div>
          <div className="body">
            <div className="text-field">
              <span>Date d'enregistrement : </span>
              <span>{projet.date_creation}</span>
            </div>

            <div className="text-field">
              <span>Ville : </span>
              <span>{projet.ville}</span>
            </div>
            <div className="text-field">
              <span>Quartier : </span>
              <span>{projet.quartier}</span>
            </div>
            <div className="text-field">
              <span>Localisation GPS : </span>
              <span>{projet.gps}</span>
            </div>
            <div className="text-field">
              <span>Type : </span>
              <span>{projet.type}</span>
            </div>
            <div className="text-field">
              <span>Numéro d'ordre de service : </span>
              <span>{projet.num_service}</span>
            </div>
            <div className="text-field">
              <span>Numéro d'accord : </span>
              <span>{projet.num_accord}</span>
            </div>
            <div className="text-field">
              <span>Numéro de bon d'achat : </span>
              <span>{projet.bon_achat}</span>
            </div>
            <div className="text-field">
              <span>Numéro de bon de commande : </span>
              <span>{projet.bon_commande}</span>
            </div>
            <div className="text-field">
              <span>Date des travaux : </span>
              <span>{projet.date_travaux}</span>
            </div>
            <div className="text-field">
              <span>Date de fin des travaux : </span>
              <span>{projet.date_fin_travaux}</span>
            </div>
            <div className="description">
              <p>Description : </p>
              <p>{projet.description}</p>
            </div>
          </div>
          <span className='et'>Photo Avant : </span>
          <div className="image">
          {photo.map((im, idx) => { if (im.type==="avant") {
                return <img src={`http://localhost:4000/image/${im.name}`} key={idx} alt="te" /> 
            } })}
          </div>
          <span className='et'>Photo Après : </span>
          <div className="image">
          {photo.map((im, idx) => { if (im.type==="apres") {
                return <img src={`http://localhost:4000/image/${im.name}`} key={idx} alt="te" /> 
            } })}
          </div>
          <span className='et'>List des Techniciens : </span>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Numero</th>
                <th>Entreprise</th>
              </tr>
            </thead>
            <tbody>
              {projet.tech.map((te, idx) => <tr key={idx}>
                <td>
                  {te.nom}
                </td>
                <td>
                  {te.email}
                </td>
                <td>{te.numero}</td>
                <td>{te.entreprise}</td>
              </tr>)}
            </tbody>
          </table>
          <div className="message">
            TRAVAUX TERMINÉS
          </div>
        </div>

      </div>}
      <NavChef />
      <main>
        <header>
          <div className="left">
            Travaux Terminés
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
              {projets.map((proj, idx) => <tr key={idx} className={idx % 2 === 0 ? 'a' : 'b'}>
                <td>{proj.numero}</td>
                <td>{proj.date_creation.substring(0, 10)}</td>
                <td>{proj.ville}</td>
                <td>{proj.quartier}</td>
                <td>{proj.gps}</td>
                <td>
                  <div className="actions">
                    <span className="btn btn-primary" onClick={() => view(proj)}><Visibility /></span>
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
