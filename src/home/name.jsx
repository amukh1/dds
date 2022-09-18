import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";

export default function Name() {
  let [name, setName] = useState('register')
  return (
    <main>
      <div className="name">
       <a href="/" className='named'>Dead-Dev Studios</a>
      <button className="register" onClick={window.location.hash.startsWith('#/dashboard') ? logout :register}>{window.location.hash.startsWith('#/dashboard') ? 'logout' :'Register'}</button>
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