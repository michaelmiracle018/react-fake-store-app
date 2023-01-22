import React from "react";
import contactUs from "../assets/images/contact_us.jpg";
// import Back from "../common/Back"
import "../styles/contact.css";

const Contact = () => {
	return (
    <>
      <div className="contact-hero">
      <img src={contactUs} alt="" />
      </div>
      <section className="contact m-5">
        <img src="" alt="" />
				<div className="container">
					<form className="shadow">
						<h4>Fill-up The Form</h4> <br />
						<div>
							<input type="text" placeholder="Name" />
							<input type="text" placeholder="Email" />
						</div>
						<input type="text" placeholder="Subject" />
						<textarea placeholder="Message" cols="30" rows="10"></textarea>
						<button className="submit-btn">Submit Request</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
