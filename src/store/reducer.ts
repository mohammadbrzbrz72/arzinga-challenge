"use client";

import { combineReducers } from "@reduxjs/toolkit";

import { orderSlice } from "./features/order-slice";
import { userSlice } from "./features/user-slice";

const rootReducer = combineReducers({
  order: orderSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
