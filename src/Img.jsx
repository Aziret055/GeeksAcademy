import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Img = ({ url }) => {
	const [img, setImg] = useState('')
	function readImg() {
		axios(url).then(res => {
			setImg(res.data.sprites.back_default)
		})
	}
	useEffect(() => {
		readImg()
	}, [])
	return (
		<div className='blocks'>
			<div className=''>{<img src={img} alt='' />}</div>
		</div>
	)
}

export default Img
