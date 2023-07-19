import React, { useState } from 'react'
import './../styles/home.css'
import { Person,Lock, Visibility, VisibilityOff,LockOpen } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navig = useNavigate()
  const [hide,setHide] = useState(true)
  const [user,setUser] = useState({
    login:"",
    password:""
  })

  const login = ()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/account/"+user.login, requestOptions)
      .then(response => response.text())
      .then(result => {
        let b = result
        if (b) {
          let a = JSON.parse(result)
            if (a.password === user.password) {
              if (a.role === "CONTROLLER") {
                navig('/controller/accueil')
              }else if (a.role === "CHARGE") {
                navig('/charge_exploitation/accueil')
              }else if (a.role === "CHEF") {
                navig('/chef_exploitation/accueil')
              }else{
                navig('/ordonancement_plannification/accueil')
              }
            }else{
              alert("ERREUR DE MOT DE PASSE")
            }
        }else{
          alert("ERREUR DE LOGIN")
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className='home'>
      <div className="login">
        <div className="head">
          <span className="title">
            Gestionnaire de projet
          </span>
        </div>
        <div className="body">
        <div className="field">
          <Person className='icon'/>
          <input type="text" placeholder='email' value={user.login} onChange={(e)=>setUser({...user,login:e.target.value})}/>
        </div>
        <div className="field">
          {hide?<Lock className='icon'/>:<LockOpen className='icon'/>}

          <input type={hide?"password":"text"} placeholder='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>

          {hide?<VisibilityOff className='icon2' onClick={()=>setHide(false)}/>:
          <Visibility className='icon2' onClick={()=>setHide(true)}/>}
        </div>
        </div>
        <div className="footer">
          <span className="btn" onClick={login}>Login</span>
        </div>
      </div>
    </div>
  )
}
