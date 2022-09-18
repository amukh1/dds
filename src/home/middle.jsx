import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import '../assets/dds.svg'

export default function Mid() {
  return (
    <main className='mid'>
        <div className="Title">We're the people 
        <br />
        to make your 
        <br />
        game.</div>

        {/* <img src="/dds.png" alt="ee" className='logoimg'/> */}
        <img src="https://raw.githubusercontent.com/amukh1/dds/master/src/dds.svg" alt="ee" className='logoimg' color='white'/>
    </main>
  )
}
