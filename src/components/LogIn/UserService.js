import axios from "axios";
const USER_API_URL = "http://localhost:8080/public-api/v1.0.0/user"

class UserService{
    logIn(params){
        return axios.post(USER_API_URL + `/login`, params)
    }
    signUp(params) {
        return axios.post(USER_API_URL + `/register`, params);
    }
}

export default new UserService();