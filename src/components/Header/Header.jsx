import React, { useState, useRef, useEffect } from "react";
import { FaIceCream, FaBars, FaTimes } from "react-icons/fa";

import logoNav from "../../assets/images/logo-design.png";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "../../styles/header.css";
// import { useGlobalContext } from "../../context";

import image from "../../assets/images/bg-image.jpg";
// const { toggleTheme, theme } = useGlobalContext();

const Nav = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const linksNav = useRef(null);


	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	});

	
	return (
		<>
			<main ref={linksNav}>
				<nav>
					<div className="nav-center">
						<div className="nav-header">
							<img src={logoNav} className="logo" alt="logo" />
							<button
								className="nav-toggle"
								onClick={() => setShowLinks(!showLinks)}
							>
								{showLinks ? <FaTimes /> : <FaBars />}
							</button>
						</div>

						<div className="links-container" ref={linksContainerRef}>
							<ul className="links" ref={linksRef}>
								<li>
									<Link to="/" className="link">
										Home
									</Link>
								</li>
								<li>
									<Link className="link" to="/about">
										About
									</Link>
								</li>
								<li>
									<Link className="link" to="/contact">
										Contact
									</Link>
								</li>
								<li>
									<Link className="link" to="/cart">
										Cart
									</Link>
								</li>
								<li>
									{/*<Link to="/about">About</Link>*/}
									<div className="mode-wrap">
										<label htmlFor="checkbox" className="switch-toggle switch">
											<input
												type="checkbox"
												id="checkbox"
												
											/>
											<div className="slider round"></div>
										</label>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</main>
		</>
	);
};

export default Nav;
