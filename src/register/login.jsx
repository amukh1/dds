import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";

export default function Login() {
  return (
    <main>
      <div className="login">
        <div className="Title2">Login with discord</div>
        <button className="discordLogin" onClick={login}>
            <span>Login with discord</span>
        </button>
      </div>
    </main>
  )
}

function login() {
window.location.href = `https://discord.com/api/oauth2/authorize?client_id=965088615204016138&redirect_uri=https%3A%2F%2Fdds.amukh1.repl.co%2Foauth&response_type=code&scope=identify%20email%20connections%20guilds`
// window.location.reload();
}