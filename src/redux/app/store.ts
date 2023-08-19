import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";
import { signupApi } from "./api/signupApiSlice";
import { loginApi } from "./api/loginApiSlice";

const middleware = (getDefaultMiddleware: () => any[]) =>
  getDefaultMiddleware().concat(signupApi.middleware, loginApi.middleware)

const store = configureStore({
  reducer: {
    auth: authReducer,
    mobileNav: mobileNavReducer,
    [signupApi.reducerPath]: signupApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware,
  devTools: true,
});

export default store;
export type RootStateType = ReturnType<typeof store.getState>;
