import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import Mid from "../home/middle.jsx";
import Name from "../home/name.jsx";

export default function App() {
  return (
    <main>
        {/* <Name /> */}
        <div className="padderone"></div>
        <Mid />
    </main>
  )
}
