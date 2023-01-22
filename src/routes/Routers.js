import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SingleProduct from "../pages/SingleProduct";
import Order from "../pages/Order";





const Routers = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home to="/" />}></Route>
				<Route path="/home" element={<Home />} ></Route>
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/home/:id" element={<SingleProduct />} />
				<Route path="/order" element={<Order />} />
				{/* 
    <Route path="/register" element={<Register />} />
  <Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</Router>
	);
};

export default Routers;
