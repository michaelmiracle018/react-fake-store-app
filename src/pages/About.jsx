import React from "react";
import aboutUs from "../assets/images/fashion logo.webp";
import '../styles/aboutUs.css'

const About = () => {
	return (
		<div className="container wrapper p-5">
			<div className="left-container mb-2">
				<h1>Our Agency Story</h1>
				<p className="check-out">
					Check out our company story and work process
				</p>
				<p className="first-para">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p className="second-para">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip.
				</p>
				<button className="more-btn">More About Us</button>
			</div>
			<div className="right-container">
				<img src={aboutUs} alt="" />
			</div>
		</div>
	);
};

export default About;
