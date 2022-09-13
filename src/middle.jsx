import './App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import logo from './dds.svg'

export default function Mid() {
  return (
    <main className='mid'>
        <div className="Title">We're the people 
        <br />
        to make your 
        <br />
        game.</div>

        {/* <img src="/dds.png" alt="ee" className='logoimg'/> */}
        <img src={logo} alt="ee" className='logoimg' color='white'/>
    </main>
  )
}
