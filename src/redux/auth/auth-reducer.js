// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// import authActions from './auth-actions';

// const accessTokenInitialState = null;

// const accessTokenReducer = createReducer(accessTokenInitialState, {
//   [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
//   [authActions.logoutSuccess]: () => accessTokenInitialState,
//   [authActions.refreshSuccess]: (_, { payload }) => payload.newAccessToken,
// });

// const refreshTokenInitialState = null;

// const refreshTokenReducer = createReducer(refreshTokenInitialState, {
//   [authActions.loginSuccess]: (_, { payload }) => payload.refreshToken,
//   [authActions.logoutSuccess]: () => refreshTokenInitialState,
//   [authActions.refreshSuccess]: (_, { payload }) => payload.newRefresh,
// });

// const isAuthorizedReducer = createReducer(false, {
//   [authActions.loginSuccess]: () => true,
//   [authActions.logoutSuccess]: () => false,
//   [authActions.refreshSuccess]: () => true,
//   [authActions.refreshError]: () => false,
// });

// const authReducer = combineReducers({
//   accessToken: accessTokenReducer,
//   refreshToken: refreshTokenReducer,
//   isAuthorized: isAuthorizedReducer,
// });

// export default authReducer;
