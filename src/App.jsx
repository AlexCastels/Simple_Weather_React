import { HomePage } from "./components/HomePage";
import {Routes , Route } from 'react-router-dom'
import { Welcome } from "./components/Welcome";
import { Weather } from "./components/Weather";

export function App(){
	return (
		<div className="general-container">
			<Routes>
				<Route path='/' element={<HomePage/>}/>
				<Route path='welcome' element={<Welcome username='Alex'/>}/>
				<Route path='weather' element={<Weather/>}/>
			</Routes> 
		</div>
	)
}
