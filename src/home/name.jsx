import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";

export default function Name() {
  return (
    <main>
      <div className="name">
       <a href="/" className='named'>Dead-Dev Studios</a>
      <button className="register" onClick={window.location.pathname == '/dashboard' ? logout :register}>{window.location.pathname == '/dashboard' ? 'logout' :'Register'}</button>
      </div>
    </main>
  )
}

function register() {
    // alert('Work in progress!')
    window.location.href = '/login'
}

function logout() {
  console.log('logging out')
  window.localStorage.setItem('signedIn', false)
}