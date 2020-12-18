//Init
import React, { useState } from "react";
import axios from "axios";

//Navbar
import Nav from "./Nav";

function Quote() {
	//Initializing State
	let [quote, setQuote] = useState({ quote: "", author: "" });
	let [submit, setSubmit] = useState("");

	//Handle Input
	const handleInput = (e) => {
		setQuote((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	//Handle Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("/quotes", quote)
			.then(() => {
				setSubmit(
					<span className="success">
						Quote posted successfully...
					</span>
				);
				setQuote({ quote: "", author: "" });
			})
			.catch(() => {
				setSubmit(
					<span className="error">Opps an error accured...</span>
				);
			});
	};

	//Rendering Component
	return (
		<>
			<Nav />

			<div className="form-container quote">
				<form onSubmit={handleSubmit}>
					<h2>Add New Quote</h2>
					<textarea
						name="quote"
						cols="30"
						rows="3"
						placeholder="Quote"
						onChange={handleInput}
						value={quote.quote}
					></textarea>
					<input
						type="text"
						name="author"
						placeholder="Author"
						value={quote.author}
						onChange={handleInput}
					/>

					{submit ? (
						submit
					) : (
						<button type="submit">Post Quote</button>
					)}
				</form>
			</div>
		</>
	);
}

//Export
export default Quote;
