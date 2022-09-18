import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import { useParams } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      /404
        <br />
        <center>
    <div className="Title">
        404: Page not found
        <br />
        Are you lost?
        </div>
    </center>
    </main>
  )
}
