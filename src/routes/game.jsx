import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import { useParams } from 'react-router-dom';

export default function Game() {
    const params = useParams();
  return (
    <main>
      /game
        <br />
      game id: {params.id}
    </main>
  )
}
