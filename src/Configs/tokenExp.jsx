import { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthState } from './action';
import { useNavigate } from 'react-router-dom';

export function useAuth() {

  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const history = useNavigate();
  const token = useSelector(state => state.token);
  useEffect(() => {
    if (token) {
      const tokenWithoutBearer = token.replace('Bearer ', '');
      const decodedToken = jwtDecode(tokenWithoutBearer);
      // Vérifiez si le token est expiré ou non
      if (decodedToken.exp * 1000 < Date.now()) {
        // Si le token est expiré, déconnectez l'utilisateur
        setUser(null);
        dispatch(resetAuthState());
        history('/login');
      } else {
        // Si le token est valide, définissez l'utilisateur dans l'état
        setUser(decodedToken);
      }
    } else {
      // Si aucun token n'est présent, redirigez l'utilisateur vers la page de connexion
      history('/login');
    }
  }, [history]);
  return user;
}
