const authService = {
  TOKEN_KEY: '@auth',
  REFRESH_TOKEN_KEY: '@refresh-auth',

  isAuthenticated: () => sessionStorage.getItem(authService.TOKEN_KEY) !== null,

  getToken: () => sessionStorage.getItem(authService.TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(authService.REFRESH_TOKEN_KEY),

  storeTokens: (token, refreshToken) => {
    authService.storeToken(token);
    authService.storeRefreshToken(refreshToken);
  },

  storeToken: token => {
    sessionStorage.setItem(authService.TOKEN_KEY, token);
  },
  storeRefreshToken: refreshToken => {
    localStorage.setItem(authService.REFRESH_TOKEN_KEY, refreshToken);
  },

  logout: () => {
    sessionStorage.removeItem(authService.TOKEN_KEY);
    localStorage.removeItem(authService.REFRESH_TOKEN_KEY);
  }
};

export default authService;
