import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import expenseReducer from "./expenseSlice"; // Your custom reducerYour RTK Query API slice
import { combineReducers } from "redux";
import { postItemApi } from "./ApiSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Combine reducers
const rootReducer = combineReducers({
  expense: expenseReducer,
  [postItemApi.reducerPath]: postItemApi.reducer,
});

// Persist configuration
const persistConfig = {
  key: "root", // Key to store data in storage
  storage: AsyncStorage,
  whitelist: ["expense"], // Only persist `expenseReducer` (RTK Query cache is not persisted by default)
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store configuration
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(postItemApi.middleware),
});

export const persister = persistStore(store);

// Set up RTK Query listeners
setupListeners(store.dispatch);

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
