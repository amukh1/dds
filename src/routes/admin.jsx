import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import { useParams } from 'react-router-dom';

export default function Admin() {
    let data = JSON.parse(window.localStorage.getItem('data'))

    let [rank, setRank] = useState('Un-Authorized')
    async function getUser(){
        let x = await fetch(`https://dds.amukh1.repl.co/user?user=${data.username}${encodeURIComponent('#')}${data.discriminator}`)
        let y = await x.json()
        console.log(y)
        setRank(y.rank + ' (' + y.numericalRank + ')')
        return y
    }

    getUser()
  return (
    <main>
      /admin
        <br />
        rank: {rank}
        <br />
        <input type="text" className="addU" placeholder='amukh1#9613'/>
        <input type="text" className="addU" placeholder='admins'/>
        <button className="addU h" onClick={
            ()=> {
                let user = document.getElementsByClassName('addU')[0].value
                let rank = document.getElementsByClassName('addU')[1].value
                fetch(`https://dds.amukh1.repl.co/staff/hire/${encodeURIComponent(user)}?rank=${encodeURIComponent(rank)}`)
            }
        }>Hire staff</button>

        {/* <br /> */}
        <hr />

        <input type="text" className="addU" placeholder='amukh1#9613' id="remu"/>
        <button className="addU h"onClick={
            ()=> {
                let user = document.getElementById('remu').value
                console.log(`https://dds.amukh1.repl.co/staff/remove/${encodeURIComponent(user)}`)
                fetch(`https://dds.amukh1.repl.co/staff/remove/${encodeURIComponent(user)}`)
            }
        }>remove staff</button>

        {/* <br /> */}
        <hr />

        <input type="text" className="addU" placeholder='amukh1#9613'/>
        <button className="addU h">promote staff</button>

        {/* <br /> */}
        <hr />

        <input type="text" className="addU" placeholder='amukh1#9613'/>
        <button className="addU h">demote staff</button>

        {/* <br /> */}
        <hr />

        <input type="text" className="addU" placeholder='amukh1#9613'/>
        <input type="text" className="addU" placeholder='13'/>
        <button className="addU h">Assign project</button>
    </main>
  )
}
