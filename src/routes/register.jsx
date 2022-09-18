import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import Login from '../register/login.jsx';

export default function Register() {
  return (
    <main>
      <div className="Title2">Are you a developer?</div>
        <div className="Title2">Are you having trouble putting your skills to use?</div>
        <div className="Title2">Are you looking for a team to work with?</div>
        <Login />
    </main>
  )
}