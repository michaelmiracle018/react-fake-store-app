import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/cartSlice";
import ModalReducer from "./features/modal/modalSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productReducer,
		modal: ModalReducer
	},
});