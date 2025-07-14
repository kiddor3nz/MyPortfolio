import axios from "axios";
import router from "./router";
const axiosClient = axios.create({
  baseURL: "https://laravel-deploy-feio.onrender.com",
  withCredentials: true,
  withXSRFToken: true
})

// axiosClient.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
// })

axiosClient.interceptors.response.use((response) => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    router.push({name: 'login'});
  }

  throw error;
})

export default axiosClient