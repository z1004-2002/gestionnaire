import React, { useEffect, useState } from 'react'
import { Add, Checklist, Close, Delete, Edit, Logout, Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import "./../../styles/dashboard.css"
import NavCharge from './../../components/NavCharge'
import vol from "./../../assets/vol.jpeg"


export default function ContNew() {
  const [modal, setModal] = useState(false)
  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalTech, setModalTech] = useState(false)
  const [projets, setProjets] = useState([])
  const [projet, setProjet] = useState({
    numero: 1,
    date_creation: "10-09-2023",
    ville: "Yaoundé",
    quartier: 'Emana',
    gps: "41.40338, 2.17403",
    type: "T1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at et molestiae quia sunt autem inventore reiciendis blanditiis deleniti nam."
  })
  const [newProjet, setNewProjet] = useState(
    {
      ville: "Yaoundé",
      quartier: 'Emana',
      gps: "41.40338, 2.17403",
      type: "T1",
      description: "Lorem, ipsum dolor sit "
    }
  )
  const [editProjet, setEditProjet] = useState(
    {
      numero: 1,
      ville: "Yaoundé",
      quartier: 'Emana',
      gps: "41.40338, 2.17403",
      type: "T1",
      description: "Lorem, ipsum dolor sit "
    }
  )
  const [photo, setPhoto] = useState([vol])
  const [techList, setTechLIst] = useState([])
  const [tech, setTech] = useState({
    nom: "lorem",
    email: "lorem",
    numero: "lorem",
    entreprise: "lorem"
  })

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

  const edit = (item) => {
    setEditProjet(item)
    setModalEdit(true)
  }
  const complete = (item) => {
    setProjet(item)
    setModalTech(true)
  }

  const logout = () => {
    navig('/')
  }

  const remove = (idx) => {
    let a = techList
    a.splice(idx, 1)
    let b = []
    for (let i = 0; i < a.length; i++) {
      b.push(a[i])
    }
    setTechLIst(b)
  }

  const addToList = () => {
    setTechLIst([...techList, tech])
    setTech({
      nom: "",
      email: "",
      numero: "",
      entreprise: ""
    })
  }

  const createProject = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "ville": newProjet.ville,
      "quartier": newProjet.quartier,
      "description": newProjet.description,
      "gps": newProjet.gps,
      "type": newProjet.type,
      "etape": "NEW"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/projet/create", requestOptions)
      .then(response => response.text())
      .then(result => {
        let a = JSON.parse(result)
        if (a.numero) {
          window.location.reload()
        }
      })
      .catch(error => console.log('error', error));
  }
  const addTech = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(techList);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/projet/tech?numero="+projet.numero, requestOptions)
      .then(response => response.text())
      .then(result => {
        let a = JSON.parse(result)
        if (a.numero) {
          window.location.reload()
        }
      })
      .catch(error => console.log('error', error));
    console.log(techList);
  }

  const editProject = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "date_creation": editProjet.date_creation,
      "ville": editProjet.ville,
      "quartier": editProjet.quartier,
      "description": editProjet.description,
      "gps": editProjet.gps,
      "type": editProjet.type
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/projet/update?numero=" + editProjet.numero, requestOptions)
      .then(response => response.text())
      .then(result => {
        let a = JSON.parse(result)
        if (a.numero) {
          window.location.reload()
        }
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:4000/projet/1", requestOptions)
      .then(response => response.text())
      .then(result => setProjets(JSON.parse(result)))
      .catch(error => console.log('error', error));

  }, [techList])

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
        </div>

      </div>}
      {modalAdd && <div className="modal">

        <div className="modal-content">
          <Close className='close' onClick={() => setModalAdd(false)} />
          <div className="head">
            NOUVEAU PROJET
          </div>
          <div className="body">
            <div className="text-field">
              <span>Ville : </span>
              <span><input type="text" value={newProjet.ville} onChange={(e) => setNewProjet({ ...newProjet, ville: e.target.value })} /></span>
            </div>
            <div className="text-field">
              <span>Quartier : </span>
              <span><input type="text" value={newProjet.quartier} onChange={(e) => setNewProjet({ ...newProjet, quartier: e.target.value })} /></span>
            </div>
            <div className="text-field">
              <span>Localisation GPS : </span>
              <span><input type="text" value={newProjet.gps} onChange={(e) => setNewProjet({ ...newProjet, gps: e.target.value })} /></span>
            </div>
            <div className="text-field">
              <span>Type : </span>
              <span>
                <select id="monselect" value={newProjet.type} onChange={(e) => setNewProjet({ ...newProjet, type: e.target.value })} >
                  <option value="T1">T1</option>
                  <option value="T2">T2</option>
                  <option value="T3">T3</option>
                  <option value="T4">T4</option>
                </select>
              </span>
            </div>
            <div className="description">
              <p>Description : </p>
              <p><textarea name="description" value={newProjet.description} onChange={(e) => setNewProjet({ ...newProjet, description: e.target.value })} id="description" cols="54" rows="4"></textarea></p>
            </div>
          </div>
          <span className='et'>Photo Avant : <input type="file" placeholder='Ajouter des images' /></span>
          <div className="image">
            {photo.map((im, idx) => <img src={im} key={idx} alt="te" />)}
          </div>
          <div className="btns">
            <span onClick={() => setModalAdd(false)}>Annuler</span>
            <span onClick={() => createProject()}>Valider</span>
          </div>
        </div>

      </div>}

      {modalTech && <div className="modal">

        <div className="modal-content">
          <Close className='close' onClick={() => setModalTech(false)} />
          <div className="head">
            Assigner des Techniciens au projet {projet.numero}
          </div>
          <div className="body">
            <div className="text-field">
              <span>Nom : </span>
              <span><input type="text" value={tech.nom} onChange={(e) => setTech({ ...tech, nom: e.target.value })} /></span>
            </div>
            <div className="text-field">
              <span>Email : </span>
              <span><input type="text" value={tech.email} onChange={(e) => setTech({ ...tech, email: e.target.value })} /></span>
            </div>
            <div className="text-field">
              <span>Numero : </span>
              <span><input type="text" value={tech.numero} onChange={(e) => setTech({ ...tech, numero: e.target.value })} /></span>
            </div>
            <div className="text-field">
              <span>Entreprise : </span>
              <span><input type="text" value={tech.entreprise} onChange={(e) => setTech({ ...tech, entreprise: e.target.value })} /></span>
            </div>
            <div className="btns">
              <span onClick={() => addToList()}>Add</span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Numero</th>
                <th>Entreprise</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {techList.map((te, idx) => <tr key={idx}>
                <td>
                  {te.nom}
                </td>
                <td>
                  {te.email}
                </td>
                <td>{te.numero}</td>
                <td>{te.entreprise}</td>
                <td>
                  <Delete className='del' onClick={() => { remove(idx) }} />
                </td>
              </tr>)}
            </tbody>
          </table>

          <div className="btns">
            <span onClick={() => setModalTech(false)}>Annuler</span>
            <span onClick={() => addTech()}>Valider</span>
          </div>
        </div>

      </div>}
      <NavCharge />
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
              {projets.map((proj, idx) => <tr key={idx} className={idx % 2 === 0 ? 'a' : 'b'}>
                <td>{proj.numero}</td>
                <td>{proj.date_creation.substring(0, 10)}</td>
                <td>{proj.ville}</td>
                <td>{proj.quartier}</td>
                <td>{proj.gps}</td>
                <td>
                  <div className="actions">
                    <span className="btn btn-primary" onClick={() => view(proj)}><Visibility /></span>
                    <span className="btn btn-danger" onClick={() => complete(proj)}><Checklist /></span>
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
