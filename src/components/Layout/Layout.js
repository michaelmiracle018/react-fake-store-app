import React from "react";

// import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

// import Carts from "../UI/cart/Carts.jsx";
// import { useSelector } from "react-redux";
// const showCart = useSelector((state) => state.cartUi.cartIsVisible);
// {showCart && <Carts />}

const Layout = () => {
	return (
		<div>
			
			<div>
				<Routes />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
