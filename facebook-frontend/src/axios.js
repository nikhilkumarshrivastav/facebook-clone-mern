import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://facebook-clone-mern-app.herokuapp.com'
})

export default instance