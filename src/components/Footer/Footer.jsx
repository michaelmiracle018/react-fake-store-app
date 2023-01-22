import React from "react";
import { ImLocation2 } from "react-icons/im";
import { AiTwotonePhone, AiFillTwitterCircle } from "react-icons/ai";
import { HiMailOpen } from "react-icons/hi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import "../../styles/footer.css";

const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<footer className="main_container">
			<div className="mt-5  container">
				{/*===== CONTACT SECTION =====*/}
				<section className="contact_footer">
					<div className="location_content">
						<div className="location_icon">
							<ImLocation2 />
						</div>
						<div className="text">
							<h2>Find Us</h2>
							<p>Lorem ipsum dolor. </p>
						</div>
					</div>
					<div className="call_content">
						<div className="call_icon">
							<AiTwotonePhone />
						</div>
						<div className="text">
							<h2>Call Us</h2>
							<p>092829992992</p>
						</div>
					</div>{" "}
					<div className="mail_content">
						<div className="mail_icon">
							<HiMailOpen />
						</div>
						<div className="text">
							<h2>Mail Us</h2>
							<p>mail@info.com</p>
						</div>
					</div>
				</section>
				{/*=====END OF CONTACT SECTION =====*/}
				<div className="line"></div>
				{/*===== ABOUT SECTION =====*/}
				<section className="about_section pb-3">
					<div className="logo_content mt-4 ">
						<img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="" />
						<p>
							Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
							eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
							ipsum dolor sit amet.
						</p>
						<div className="follow_us">
							<h2>Follow Us</h2>
							<div className="follow_us_icons">
								<a href="#">
									<FaFacebookF />
								</a>
								<a href="#">
									<AiFillTwitterCircle />
								</a>
								<a href="#">
									<IoLogoGoogleplus />
								</a>
							</div>
						</div>
					</div>
					<div className="links_content mt-5">
						<h2>Useful Links</h2>
						<div className="underline"></div>
						<div className="links">
							<div className="link1">
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">Services</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
									<li>
										<a href="#">Our Services</a>
									</li>
									<li>
										<a href="#">Contact Us</a>
									</li>
								</ul>
							</div>
							<div className="link2">
								<ul>
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Portfolio</a>
									</li>
									<li>
										<a href="#">About Us</a>
									</li>
									<li>
										<a href="#">Expert Team</a>
									</li>
									<li>
										<a href="#">Expert Team</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="subscribe_content ">
						<h2>Subscribe</h2>
						<div className="underline"></div>
						<p>
							Don’t miss to subscribe to our new feeds, kindly fill the form
							below.
						</p>
						<div className="input_wrap">
							<input type="text" placeholder="Email Address" />
							<button>
								<FaTelegramPlane />
							</button>
						</div>
					</div>
				</section>
				{/*===== END OF ABOUT SECTION =====*/}
				{/*=====  COPYRIGHT SECTION =====*/}
				{/*
				<section className="copyright_section">
					<p>
						Copyright © {date}, All Right Reserved <span>Miracle</span>{" "}
					</p>
					<div className="footer_menu">
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Terms</a>
							</li>
							<li>
								<a href="#">Privacy</a>
							</li>
							<li>
								<a href="#">Policy</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
</section>*/}
				{/*===== END OF COPYRIGHT SECTION =====*/}
			</div>
		</footer>
	);
};

export default Footer;
