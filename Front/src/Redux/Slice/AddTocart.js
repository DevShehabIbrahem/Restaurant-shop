import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartitems: [] };

const AddToCart = createSlice({
  name: "prducts",
  initialState,
  reducers: {
    onadd: (state, { payload }) => {
      const exist = state.cartitems.find((x) => x.id === payload.id);

      const incress = state.cartitems.map((item) =>
        item.id === payload.id ? { ...exist, qty: exist.qty + 1 } : item
      );
      //first click
      const first = [...state.cartitems, { ...payload, qty: 1 }];
      if (exist) {
        return {
          ...state,
          cartitems: incress,
        };
      } else {
        return {
          ...state,
          cartitems: first,
        };
      }
    },
  },
});
export default AddToCart.reducer;

export const { onadd } = AddToCart.actions;

export const addcart = (state) => state.addpro.cartitems;
