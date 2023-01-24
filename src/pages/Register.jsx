import React, { useState, useEffect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import "../styles/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "./api/axios";

const REGISTER_URL = "/users/signup";

const Register = () => {
	return (
		<>
			<div className="register_container">
				<div className="register_sub-container">
					<section className="register_section">
						<div className="register_left_container">
							<h2>Sign Up</h2>
							<p>sign up using E-Mail Address</p>
							<section className="form_control">
								<h1>Lorem, ipsum.</h1>
								<div class="input-field">
									<input type="text" required spellcheck="false" />
									<label>name</label>
								</div>
								<div class="input-field">
									<input type="text" required spellcheck="false" />
									<label>email</label>
								</div>{" "}
								<div class="input-field">
									<input type="text" required spellcheck="false" />
									<label>number</label>
								</div>
								<div class="input-field">
									<input type="text" required spellcheck="false" />
									<label>Password</label>
								</div>
								<div class="input-field">
									<input type="text" required spellcheck="false" />
									<label>Confirm Password</label>
								</div>
							</section>
							<div className="register_btn">
								<button>Sign up</button>
							</div>
						</div>
						<div className="register_right_container">
							<h1>Create, Account!</h1>
							<p>Sign up if you still don't have an account ...</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Register;
