import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosCoustom = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})


const useCoustomAxios = () => {
   
  const { logOut } = useAuth()
  const navigate = useNavigate();
  useEffect(() => {
    axiosCoustom.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.status === 401 || error.status === 403) {
        console.log('neddd to ');
        logOut()
          .then(() => {
            console.log('logged out user');
            navigate('/login')
          })
        .catch(error => console.log(error))
      }
      return Promise.reject(error)
   })
 },[])

  return axiosCoustom;
  
};

export default useCoustomAxios;