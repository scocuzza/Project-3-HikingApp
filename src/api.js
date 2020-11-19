
import axios from 'axios'
//index ,show,create,update,destory are routes
//get all articles
const getAllTrails = () => {
	return axios.get(`${process.env.REACT_APP_BASE_URL}/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${process.env.REACT_APP_BASE_URL}`)

}





