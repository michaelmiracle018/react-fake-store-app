import React from "react";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { calculateTotals } from "./features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/UI/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const { cartBag } = useSelector((store) => store.products);
	const { isOpen } = useSelector((store) => store.modal);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartBag]);

	return (
		<>
			<div>
				{isOpen && <Modal />}

				<Layout />
			</div>
			<ToastContainer />
		</>
	);
};

export default App;
