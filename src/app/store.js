import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../features/registrations/registrationSlice";

export const store = configureStore({
  reducer: {
    registrations: registrationReducer
  }
});
