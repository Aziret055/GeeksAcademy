import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Img from './Img'

function App() {
	const [data, setData] = useState([])
	function readProduct() {
		axios(`https://pokeapi.co/api/v2/pokemon/ `).then(res => {
			setData(res.data.results)
		})
	}
	useEffect(() => {
		readProduct()
	}, [])
	console.log(data)
	return (
		<div className='container'>
			<div className='home'>
				<div className='RodBlock'>
					<h1 className='geeks'>GEEKS</h1>
					<div className='top'>
						{data.slice(0, 6).map(el => (
							<div className='flex'>
								<Img url={el} />
								<h3>{el.name}</h3>
							</div>
						))}
					</div>
				</div>
				<div className='text'>
					<h2 className='textOne'>
						Сделать Pokemon лист с помощью <br /> CRA(create.react.app) или на
						Vite React
					</h2>
					<h2 className='textTwo'>
						1. сверстать карточку покемонов <br />
						2. сделать запрос на Pakemon API <br />
						3. отобразить карточки на странице
					</h2>
				</div>
			</div>
		</div>
	)
}

export default App
