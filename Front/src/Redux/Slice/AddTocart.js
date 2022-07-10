import { createSlice } from "@reduxjs/toolkit";
const newarr = localStorage.getItem("CartItems");

const initialState = {
  //items State Crud is here
  totalItems: JSON.parse(newarr) || [],
  slideCart: false,
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
  },
});
export default AddToCart.reducer;

export const { TotalCartITems, slideCartitems } = AddToCart.actions;

export const totalInCart = (state) => state.addpro.totalItems;
export const slideCart = (state) => state.addpro.slideCart;
