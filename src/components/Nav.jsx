//Init
import React from "react";
import { Link } from "react-router-dom";

// Firebase
import { auth } from "../firebase";

//Style
import "../style/Nav.css";

// Portal Nav Component
function Nav() {
	const handleLogout = () => {
		auth.signOut()
			.then(() => (window.location = "/login"))
			.catch((err) => console.log(err));
	};

	// Render
	return (
		<nav>
			<div className="logo-container">
				<Link to="/">
					<span>{"< Portal />"}</span>
				</Link>
			</div>
			<div className="logout" onClick={handleLogout}>
				<i className="logout-icon fas fa-power-off"></i>
			</div>
		</nav>
	);
}

// Export
export default Nav;
