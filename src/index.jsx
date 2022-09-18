import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from './routes/App';
import Dashboard from './routes/dashboard'
import Register from './routes/register'
import Game from './routes/game'

import Name from "./home/name.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
		<Router>
			{/* <App/> */}
			<Name />
			<Routes>
			<Route path="/" element={<App/>}/>
			<Route path="/dashboard" element={<Dashboard/>}/>
			<Route path="/login" element={<Register/>}/>
			<Route path='/game/:id' element={<Game/>}/>
			<Route path='*' element={<div>404..?</div>}/>
			</Routes>
		</Router>
)