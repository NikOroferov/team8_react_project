const getIsLoggedIn = state => state.auth.isLogedIn;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getToken,
};

export default authSelectors;
