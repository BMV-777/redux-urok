import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../components/counter/counterSlice";
// import { createAction, createReducer } from "@reduxjs/toolkit";
import { userSlice } from "../components/myValue/userSlice";

// export const increment = createAction('myValue/increment');
// export const decrement = createAction("myValue/decrement");

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,

// })

export const store = configureStore({
  reducer: {
    // myValue: myReducer,
    user: userSlice.reducer,
    // counter: counterReducer,
  },
});
