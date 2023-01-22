import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/categories.css";
import { fetchSpecificCategory } from "../../features/products/productSlice";

export const Categories = ({ category }) => {
	const dispatch = useDispatch();

	return (
		<main className="category_container mb-3">
			<div className="category_btn">
				<button
					className="mt-3 p-2"
					onClick={() => {
						dispatch(fetchSpecificCategory(category));
					}}
				>
					{category}
				</button>
			</div>
		</main>
	);
};
