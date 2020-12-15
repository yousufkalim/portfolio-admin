//Init
import React, { useState } from "react";

// Contorllers
import { handleInput, handleSubmit } from "../controllers/quote";

//Navbar
import Nav from "./Nav";

function Quote() {
	//Initializing State
	let [quote, setQuote] = useState({ quote: "", author: "" });
	let [alert, setAlert] = useState(null);

	//Rendering Component
	return (
		<>
			<Nav />

			<div className="form-container quote">
				<form
					onSubmit={(e) => handleSubmit(e, quote, setQuote, setAlert)}
				>
					<h2>Add New Quote</h2>
					{alert ? (
						<div
							className={`alert ${
								alert.status ? "success" : "error"
							}`}
						>
							<button
								type="button"
								className="close"
								onClick={() => setAlert("")}
							>
								&times;
							</button>
							<strong>{alert.alert}</strong>
						</div>
					) : null}
					<textarea
						name="quote"
						cols="30"
						rows="3"
						placeholder="Quote"
						onChange={(e) => handleInput(e, setQuote)}
						value={quote.quote}
					></textarea>
					<input
						type="text"
						name="author"
						placeholder="Author"
						value={quote.author}
						onChange={(e) => handleInput(e, setQuote)}
					/>

					<button type="submit">Post Quote</button>
				</form>
			</div>
		</>
	);
}

//Export
export default Quote;
