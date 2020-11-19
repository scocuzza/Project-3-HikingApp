
import axios from 'axios'
//get all trails
const getAllTrails = (lat, long) => {
	return axios.get(`${process.env.REACT_APP_BASE_URL}/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=${process.env.REACT_APP_BASE_URL}` ,
	{
		headers: {
		  'Access-Control-Allow-Origin': '*',
		}
	})
}

export {getAllTrails}




