import { createSlice } from "@reduxjs/toolkit";

import { removeItemFromArray } from "@/utils/data";

export interface IOrderSlice {
  [key: string]: number[];
}
export interface IPayloadOrder {
  id: number;
  product_id: number;
}

const initialState: IOrderSlice = {};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItemOrder: (state, { payload }) => {
      if (String(payload.id) in state) {
        state[String(payload.id)].push(payload.product_id);
      } else {
        state[String(payload.id)] = [payload.product_id];
      }
    },
    removeItemOrder: (state, { payload }) => {
      const result = removeItemFromArray(
        payload.product_id,
        state[String(payload.id)]
      );

      if (result.length === 0) {
        delete state[String(payload.id)];
      } else {
        state[String(payload.id)] = result;
      }
    },
    removeOrder: (state) => {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
    },
  },
});
