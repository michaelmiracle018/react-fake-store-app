import React, { useEffect } from "react";
import "../styles/home.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { carousel } from "../helpers";
import { Categories } from "../components/UI/Categories";
import Products from "../components/UI/Products";
import Loading from "../components/UI/Loading";

import { useDispatch, useSelector } from "react-redux";
import {
	fetchProducts,
	fetchCategories,
	fetchLimit,
} from "../features/products/productSlice";

const Home = () => {
	const dispatch = useDispatch();
	const { products, isLoading, categories } = useSelector(
		(store) => store.products,
	);

	// UseEffect For fetchProducts
	useEffect(() => {
		dispatch(fetchProducts("random"));
	}, []);

	// UseEffect For fetchCategories
	useEffect(() => {
		dispatch(fetchCategories());
	}, []);



	if (isLoading) {
		return (
			<main className="py-5">
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<article className="carousel-section">
				<Splide
					options={{
						perPage: 1,
						arrows: true,
						pagination: true,
						drag: "free",
					}}
					className="splide__arrows splide__arrows--ltr"
				>
					{carousel.map((item) => {
						const { id, title, image, desc } = item;
						return (
							<SplideSlide key={id}>
								<div className="image-carousel mb-4">
									<img src={image} alt="hero" />
									<div className="modal-container">
										<h2>{title}</h2>
										<p>{desc}</p>
										<button className="mt-4">Check it out</button>
									</div>
								</div>
							</SplideSlide>
						);
					})}
				</Splide>
			</article>
			<div className="main_product_section ">
				<article className="container product-section">
					<h1 className="pt-5">Our Products</h1>
					<div className="product_wrapper">
						<div className="category_wrap">
							<div className="category_content ">
								{categories.map((category, index) => {
									return <Categories key={index} category={category} />;
								})}
							</div>
							{/*<div className="category_input input_s">
								<input type="text" />
								<button className="search_btn">search</button>
							</div> */}
						</div>
						<div>
							{/*<div className="product_input my-4 input_s">
								<input type="text" />
								<button className="search_btn">search</button>
						</div>*/}
							<div className="card_container pb-5 ">
								{products.map((product) => {
									return <Products key={product.id} product={product} />;
								})}
							</div>
						</div>
					</div>
					<div className="select_wrap my-4">
						<select
							className="select"
							onChange={(e) => {
								const limit = parseInt(
									e.target.options[e.target.options.selectedIndex].innerText,
								);
								dispatch(fetchLimit(limit));
							}}
						>
							<option value="0">select</option>
							<option value="20">20</option>
							<option value="16">16</option>
							<option value="12">12</option>
							<option value="8">8</option>
							<option value="4">4</option>
						</select>
					</div>
				</article>
			</div>
		</main>
	);
};


export default Home;
