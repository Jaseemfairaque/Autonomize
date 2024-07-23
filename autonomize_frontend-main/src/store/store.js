import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/currentUser";

// Configuring redux store
export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
