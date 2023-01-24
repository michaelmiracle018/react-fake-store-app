import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import ModalReducer from "./features/modal/modalSlice";

export const store = configureStore({
	reducer: {
		products: productReducer,
		modal: ModalReducer
	},
});