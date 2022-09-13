import './App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";

export default function Name() {
  return (
    <main>
      <div className="name">Dead-Dev Studios
      <button className="register" onClick={register}>Register</button>
      </div>
    </main>
  )
}

function register() {
    alert('Work in progress!')
}