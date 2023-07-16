import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mobileNav: mobileNavReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
export type RootStateType = ReturnType<typeof store.getState>;
