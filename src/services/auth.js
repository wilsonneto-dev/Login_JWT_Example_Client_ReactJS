const authService = {
  TOKEN_KEY: "@auth",
  REFRESH_TOKEN_KEY: "@refresh-auth",

  isAuthenticated: () => localStorage.getItem(this.TOKEN_KEY) !== null,

  getToken: () => localStorage.getItem(this.TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(this.REFRESH_TOKEN_KEY),

  storeToken: token => {
    localStorage.setItem(this.TOKEN_KEY, token);
  },
  storeRefreshToken: refreshToken => {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  },

  logout: () => {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
};

export default authService;
