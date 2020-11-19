
import axios from 'axios'
//get all trails
const getAllTrails = (lat, long) => {
	return axios.get(`${process.env.REACT_APP_BASE_URL}`, {
		params: {
			lat: lat,
			lon: long,
			key: process.env.REACT_APP_API_KEY,
			maxDistance: 10
		}
	})
 }

export {getAllTrails}




