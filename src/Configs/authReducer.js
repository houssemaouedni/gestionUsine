
const initialState = {
    token: null,
    userRoles: [],
    isAuthenticated: false,
    userName: [],
    userId: [],
    tokenExp: null,
    statusMenu: true
  };
  
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return { ...state, token: action.payload };
      case 'SET_USER_ROLES':
        return { ...state, userRoles: action.payload };
      case 'RESET_AUTH_STATE':
        return { ...state, token: null, userRoles: [], isAuthenticated: false, userName: [], userId: [] , tokenExp: null};
      case 'SET_AUTH_STATUS':
        return { ...state, isAuthenticated: action.payload };
      case 'SET_USERNAME':
        return { ...state, userName: action.payload };
      case 'USER_ID':
        return { ...state, userId: action.payload };
      case 'SET_TOKEN_EXP':
        return { ...state, tokenExp: action.payload };
      case 'SET_STATUS_MENU':
        return { ...state, statusMenu: action.payload };
      default:
        return state;
    }

  };
  
  export default authReducer;
  