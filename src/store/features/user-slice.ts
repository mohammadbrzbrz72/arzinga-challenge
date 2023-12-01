import { createSlice } from "@reduxjs/toolkit";

export interface IOrderSlice {
  lat: number;
  lng: number;
  userId: number;
  userName: string;
}

const initialState: IOrderSlice = {
  lat: 0,
  lng: 0,
  userId: 12,
  userName: "Jack Machine",
};

export const userSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCoordinates: (state, { payload }) => {
      state.lat = payload.lat;
      state.lng = payload.lng;
    },
    removeCoordinates: (state) => {
      state = initialState;
    },
  },
});
