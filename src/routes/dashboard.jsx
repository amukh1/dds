import '../assets/App.css'
import { useSpring, animated, config } from "react-spring";
import react, { useState, useRef } from "react";
import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const params = useParams();
  console.log(params)
  let data;

if(window.localStorage.getItem('signedIn') == 'true') {
  data = JSON.parse(window.localStorage.getItem('data'))
}else {
    if(!params) {
      data = JSON.parse(`{"id":"0","username":"none","avatar":"ad87875e8c3c85f063a3c8c8714a9f47","avatar_decoration":null,"discriminator":"0000","public_flags":256,"flags":256,"banner":null,"banner_color":null,"accent_color":null,"locale":"en-US","mfa_enabled":false,"email":"none","verified":false}`)
      // window.localStorage.setItem('data', JSON.stringify(data))
    }else {
      data = JSON.parse(params.data)
      window.localStorage.setItem('data', JSON.stringify(data))
      window.localStorage.setItem('signedIn', true)
    }
  //   else {
  // // data = JSON.parse(decodeURIComponent(window.location.hash.slice(1)))
  // console.log(`v2`)
  // console.log(decodeURIComponent(window.location.href.split("#")[2]))
  // console.log(JSON.parse(decodeURIComponent(window.location.href.split("#")[2])))
  // data = JSON.parse(decodeURIComponent(window.location.href.split("#")[2]))
  // window.localStorage.setItem('data', JSON.stringify(data))
  // window.localStorage.setItem('signedIn', true)
  //   }
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

let games = [
  {name: '(Game) Name', id: '0', rank: 'Head Developer', due: '9/28/2022', status: '75%'},
  {name: '(Game) Name 2', id: '1', rank: 'Junior Developer', due: '9/29/2022', status: '25%'},
]

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
        {/* {<div className="project">
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
          </div>} */}
          {games.map((game, index) => {
              return (
                <div className="project" onClick={()=> {
                  window.location.href = `#/game/${game.id}`
                }}>
        <div className="p2">
          <div className="p3" style={{
            width: game.status,
          }}></div>
        </div>
          <div className="p1">
          <div >{game.name}</div>
          <div >{game.rank}</div>
          <div >{game.due}</div>
          </div>
          </div>
              )
            })
          }

{/* project 1 */}

{/* project 2  */}
        {/* <div className="project">
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
          </div> */}
{/* project 2 */}


</div>
    </main>
  )
}