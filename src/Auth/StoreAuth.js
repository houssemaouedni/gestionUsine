
import { resetAuthState, setAuthStatus, setRole, setToken, setTokenExp, setUserId, setUserName } from "../Configs/action";
import jwtDecode from "jwt-decode";
import {store} from '../Configs/store';

const StoreAuth = (res) => {
    const token = res.data.accessToken
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    const role = decodedToken.role;
    const userName = decodedToken.sub;
    const tokenExp = decodedToken.exp;
    store.dispatch(setToken('Bearer ' + token));
    store.dispatch(setRole(role));
    store.dispatch(setUserId(userId));    
    store.dispatch(setAuthStatus(true));
    store.dispatch(setUserName(userName));
    store.dispatch(setTokenExp(tokenExp));
    
}

export default StoreAuth
