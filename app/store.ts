'use client';

import { configureStore } from "@reduxjs/toolkit";
import RegistrationReducer from "./components/registrationlogic";

export const store = configureStore({
    reducer: {
        registration: RegistrationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;