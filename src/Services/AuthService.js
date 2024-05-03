import api from "./Api/api"


export const registerManagerWithRole = (user) => api.post("api/auth/register", user);

export const loginWithUsernameOrEmail = (user) => api.post("api/auth/login", user);
