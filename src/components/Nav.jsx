//Init
import React from "react";
import { Link } from "react-router-dom";

//Style
import "../style/Nav.css";

// Portal Nav Component
function Nav() {
	return (
		<nav>
			<div className="logo-container">
				<Link to="/">
					<span>{"< Portal />"}</span>
				</Link>
			</div>
			<div className="logout">
				<a href="/logout">
					<i class="fas fa-power-off"></i>
				</a>
			</div>
		</nav>
	);
}

// Export
export default Nav;
