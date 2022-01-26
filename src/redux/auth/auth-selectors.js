const getIsLoggedIn = state => state.auth.isLogedIn;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getUserAvatar = state => state.auth.user.avatar;
const getToken = state => state.auth.token;
const getIsFetchingCurrentUser = state =>
  state.auth.isFethingCurrentUser;

const authSelectors = {
  getUserName,
  getIsLoggedIn,
  getUserEmail,
  getUserAvatar,
  getToken,
  getIsFetchingCurrentUser
};

export default authSelectors;
