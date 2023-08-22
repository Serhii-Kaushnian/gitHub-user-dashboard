import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { fetchUserDataSlice } from "../redux/userData/userDataSlice";

const fetchUserDataConfig = {
  key: "fetchUser",
  storage,
  whitelist: ["query"],
};

export const store = configureStore({
  reducer: {
    userData: persistReducer(fetchUserDataConfig, fetchUserDataSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
