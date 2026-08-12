import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Add your reducers here
const rootReducer = combineReducers({
  // example: auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
