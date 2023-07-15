import React, { useState } from 'react'
import './../styles/home.css'
import { Person,Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navig = useNavigate()
  const [hide,setHide] = useState(true)

  const login = ()=>{
    navig('/controller')
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
          <input type="text" placeholder='email'/>
        </div>
        <div className="field">
          <Lock className='icon'/>
          <input type={hide?"password":"text"} placeholder='password'/>
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
