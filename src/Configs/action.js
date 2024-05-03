export const setToken = (token) => {
    return {
        type: "SET_TOKEN",
        payload: token,
    
    };
};

export const setRole = (role) => {
    return {
        type: "SET_USER_ROLES",
        payload: role,
    }
}

export const resetAuthState = () => {
    return {
      type: 'RESET_AUTH_STATE',
      
    };
  };

  export const setAuthStatus = (isAuthenticated) => {
    return {
      type: 'SET_AUTH_STATUS',
      payload: isAuthenticated,
    };
  };

  export const setUserName = (userName) => {
    return {
      type: 'SET_USERNAME',
      payload: userName,
    };
  }
  export const setTokenExp = (tokenExp) => {
    return {
      type: 'SET_TOKEN_EXP',
      payload: tokenExp,
    };
  };
  export const setUserId = (userId) => {
    return {
      type: 'USER_ID',
      payload: userId,
    };
  };

  export const setStatusMenu = (statusMenu) => {
    return {
      type: 'SET_STATUS_MENU',
      payload: statusMenu,
    };
  }
  