const authService = {
  TOKEN_KEY: "@auth",
  REFRESH_TOKEN_KEY: "@refresh-auth",

  isAuthenticated: () => localStorage.getItem(authService.TOKEN_KEY) !== null,

  getToken: () => localStorage.getItem(authService.TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(authService.REFRESH_TOKEN_KEY),

  storeToken: token => {
    localStorage.setItem(authService.TOKEN_KEY, token);
  },
  storeRefreshToken: refreshToken => {
    localStorage.setItem(authService.REFRESH_TOKEN_KEY, refreshToken);
  },

  logout: () => {
    localStorage.removeItem(authService.TOKEN_KEY);
    localStorage.removeItem(authService.REFRESH_TOKEN_KEY);
  }
};

export default authService;
