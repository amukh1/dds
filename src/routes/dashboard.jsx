import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";

export default function Dashboard() {
  let data;

if(window.localStorage.getItem('signedIn') == 'true') {
  data = JSON.parse(window.localStorage.getItem('data'))
}else
  if(window.location.hash !==''){
  data = JSON.parse(decodeURIComponent(window.location.hash.slice(1)))
  window.localStorage.setItem('data', JSON.stringify(data))
  window.localStorage.setItem('signedIn', true)
  }else {
    data = JSON.parse(`{"id":"0","username":"none","avatar":"ad87875e8c3c85f063a3c8c8714a9f47","avatar_decoration":null,"discriminator":"0000","public_flags":256,"flags":256,"banner":null,"banner_color":null,"accent_color":null,"locale":"en-US","mfa_enabled":false,"email":"none","verified":false}`)
    window.localStorage.setItem('data', JSON.stringify(data))
  }

  let avatar = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=1024`

  console.log(data)

  let [rank, setRank] = useState('')

 async function getRank(){
  let x =await fetch(`https://dead-dev.amukh1.repl.co/rank?user=${encodeURIComponent(`${data.username}#${data.discriminator}`)}`)
  let y = await x.text()
  console.log(y)
  setRank(y)
  if(y == 'Un-Authorized'){
    alert('You are not authorized to use this application. Please contact the owner of the application to get authorized.')
    window.location.href = 'https://localhost:5173'
  }
  return y
 }

console.log(getRank())



  return (
    <main>
      <img src={avatar} alt="" style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%'
      }}/>
      <span className="Title3">{data.username}#{data.discriminator}'s dashboard</span>

      <div></div>

      <span className="Title3">Rank: {rank}</span>
      <div className="Title2">Assigned projects:</div>

      <div className="projects">
{/* project 1  */}
        {<div className="project">
        <div className="p2">
          <div className="p3" style={{
            width: '75%',
          }}></div>
        </div>
          <div className="p1">
          <div >(Game) Name</div>
          <div >Head Dev</div>
          <div >9/28/2022</div>
          </div>
          </div>}

{/* project 1 */}

{/* project 2  */}
        <div className="project">
        <div className="p2">
          <div className="p3" style={{
            width: '25%',
          }}></div>
        </div>
          <div className="p1">
          <div >(Game) Name 2</div>
          <div >Junior Developer</div>
          <div >9/31/2022</div>
          </div>
          </div>
{/* project 2 */}


</div>
    </main>
  )
}