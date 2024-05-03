import axios from 'axios';
import { store } from '../../Configs/store';

import { toast } from 'react-toastify';

import { resetAuthState } from '../../Configs/action';

const instance = axios.create({
  baseURL: 'http://localhost:8080/', // Remplacez par l'URL de votre API
});

instance.interceptors.request.use(config => {
  const token = store.getState().token;
  // Remplacez par le token JWT de l'utilisateur connecté
  
  
  if (token) {
    const decodedToken = "jwtDecode(token)"; 

      const currentTime = Date.now() / 1000; 
      if (decodedToken.exp < currentTime) {
        store.dispatch(resetAuthState());
        toast.warn("Votre session a expiré, veuillez vous reconnecter");
      }
    config.headers.Authorization = token;
  }
  return config;
},
(error) => {
  return Promise.reject(error);
}
);

export default instance;