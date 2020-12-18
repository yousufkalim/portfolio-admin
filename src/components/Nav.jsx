//Init
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Style
import "../style/Nav.css";

// Portal Nav Component
function Nav() {
	const handleLogout = () => {
		axios.get("/logout").then((res) => {
			if (!res.data.success) {
				window.location = "/login";
			}
		});
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
				<i class="logout-icon fas fa-power-off"></i>
			</div>
		</nav>
	);
}

// Export
export default Nav;
