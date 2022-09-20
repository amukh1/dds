import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef, useEffect} from "react";
import {useLocation} from 'react-router-dom'

export default function Name() {
  const location = useLocation();
  let [name, setName] = useState('')

  useEffect(() => {
  if((window.localStorage.getItem('signedIn') == 'true') && !window.location.hash.startsWith('#/dashboard')){
    setName('dashboard')
    console.log('dashboard')
  }else if(window.location.hash.startsWith('#/dashboard') || window.location.hash.startsWith('#/admin')){
    setName('logout')
    console.log('logout')
  }else {
    setName('register')
    console.log('register')
  }
},[location])
  return (
    <main>
      <div className="name">
       <a href="/" className='named'>Dead-Dev Studios</a>
       <div>
       <button className="register" onClick={admin}>Admin</button>
      <button className="register" onClick={handle}>{name}</button>
      </div>
      </div>
    </main>
  )
}

function register() {
    // alert('Work in progress!')
    window.location.href = '#/login'
}

function logout() {
  console.log('logging out')
  window.localStorage.setItem('signedIn', false)
  window.location.href = '#/'
}

function admin(){
  window.location.href = '#/admin'
}

function handle(){
  if(window.location.hash.startsWith('#/dashboard')){
    logout()
  }else if(window.localStorage.getItem('signedIn') == 'true'){
    window.location.href = '#/dashboard/user'
  }else{
    register()
  }
}