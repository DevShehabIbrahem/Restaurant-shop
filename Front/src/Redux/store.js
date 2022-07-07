import { configureStore } from "@reduxjs/toolkit";
import AddTocart from "./Slice/AddTocart";

export const store = configureStore({ reducer: { addpro: AddTocart } });
