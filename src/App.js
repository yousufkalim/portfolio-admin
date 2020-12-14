// Init
import React, { useEffect, useState } from "react";
import {
	Switch,
	Route,
	Redirect,
	useHistory,
	useLocation,
} from "react-router-dom";
import axios from "axios";

//Components
import Portal from "./components/Portal";
import Login from "./components/Login";
import Article from "./components/Article";
import Portfolio from "./components/Portfolio";
import Quote from "./components/Quote";

//Style
import "./style/App.css";

//Rendering Component
function App() {
	// Initializing State
	let [loggedIn, setLoggedIn] = useState(false);

	// Using history to push not authenticated routes to login page
	let history = useHistory();

	// Gettinf pathname to track authentication
	let { pathname } = useLocation();

	// Global Setting for axios
	// axios.defaults.withCredentials = true;

	// Checking is user Authenticated or not
	useEffect(() => {
		axios.get("/checkAuth").then((res) => {
			if (res.data.success) {
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
				history.push("/login");
			}
		});
	}, [pathname]);

	// Render
	return (
		<Switch>
			{/* Routes */}
			{!loggedIn ? (
				<Route exact path="/login" component={Login} />
			) : (
				<Route exact path="/" component={loggedIn && Portal} />
			)}
			<Route exact path="/article" component={loggedIn && Article} />
			<Route exact path="/portfolio" component={loggedIn && Portfolio} />
			<Route exact path="/quote" component={loggedIn && Quote} />

			{/* 404 Route */}
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
