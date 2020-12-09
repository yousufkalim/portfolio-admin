import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Component
import Portal from "./components/Portal";
import Login from "./components/Login";
import Article from "./components/Article";
import Portfolio from "./components/Portfolio";
import Quote from "./components/Quote";

//Style
import "./style/App.css";

function App() {
	return (
		<Switch>
			{/* Routes */}
			<Route exact path="/" component={Portal} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/article" component={Article} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/quote" component={Quote} />

			{/* 404 Route */}
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
