import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import App from './routes/App';
import Dashboard from './routes/dashboard'
import Register from './routes/register'
import Game from './routes/game'
import Admin from './routes/admin'
import NotFound from './routes/404'

import Name from "./home/name.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
		<Router>
			{/* <App/> */}
			<Name />
			<Routes>
			<Route path="/" element={<App/>}/>
			<Route path="/dashboard/:data" element={<Dashboard/>}/>
			<Route path="/login" element={<Register/>}/>
			<Route path='/game/:id' element={<Game/>}/>
			<Route path="/admin" element={<Admin/>}/>
			<Route path='*' element={<NotFound/>}/>
			</Routes>
		</Router>
)