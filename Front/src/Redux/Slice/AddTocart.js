import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItems: "",
  slideCart: false,
  counterQTy: 0,
};

const AddToCart = createSlice({
  name: "prducts",
  initialState,

  reducers: {
    TotalCartITems: (state, { payload }) => {
      state.totalItems = payload;
    },
    slideCartitems: (state, { payload }) => {
      state.slideCart = payload;
    },
    numbinc: (state, { payload }) => {
      state.counterQTy += payload;
    },
    numbmin: (state, { payload }) => {
      state.counterQTy -= payload;
    },
  },
});
export default AddToCart.reducer;

export const { TotalCartITems, slideCartitems, numbinc, numbmin } =
  AddToCart.actions;

export const totalInCart = (state) => state.addpro.totalItems;
export const slideCart = (state) => state.addpro.slideCart;
export const counterQTy = (state) => state.addpro.counterQTy;
