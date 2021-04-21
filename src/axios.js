import axios from "axios"

const instance = axios.create({
    baseURL:"https://tiktockk-backend.herokuapp.com"
})

export default instance;