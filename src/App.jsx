import './App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import Mid from "./middle.jsx";
import Name from "./name.jsx";

export default function App() {
  return (
    <main>
        <Name />
        <div className="padderone"></div>
        <Mid />
    </main>
  )
}
