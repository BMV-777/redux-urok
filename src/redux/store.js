import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../components/counter/counterSlice";
// import { createAction, createReducer } from "@reduxjs/toolkit";
import { userSlice } from "../components/myValue/userSlice";
//redux-persist---///

import storage from "redux-persist/lib/storage";
// import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// export const increment = createAction('myValue/increment');
// export const decrement = createAction("myValue/decrement");

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,

// })

//  import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    // myValue: myReducer,
    user: persistedReducer,
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//     user: userSlice.reducer,
//      counter: counterReducer,
//   },
// });
