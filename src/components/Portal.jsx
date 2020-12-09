//Init
import React from "react";
import { Link } from "react-router-dom";

//Nav
import Nav from "./Nav";

//Style
import "../style/Portal.css";

function Portal() {
	return (
		<>
			<Nav />

			<div className="portal">
				<div className="links-container">
					<Link to="/">Home</Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/article">Article</Link>
					<Link to="/quote">Quote</Link>
				</div>
			</div>
		</>
	);
}

export default Portal;
