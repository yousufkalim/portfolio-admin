import React, { useState } from "react";
import axios from "axios";

import Nav from "./Nav";

//Style
import "../style/Portfolio.css";

function Portfolio() {
	//Initializing State
	let [portfolio, setPortfolio] = useState({
		title: "",
		heading: "",
		thumbnail: "",
		cover: "",
		skills: "",
		category: "",
		copyright: "",
		weburl: "",
		description: "",
	});
	let [submit, setSubmit] = useState("");

	//Handle Input
	const handleInput = (e) => {
		setPortfolio((prev) => {
			if (e.target.name === "thumbnail" || e.target.name === "cover") {
				return {
					...prev,
					[e.target.name]: e.target.files[0],
				};
			} else {
				return {
					...prev,
					[e.target.name]: e.target.value,
				};
			}
		});
	};

	//Handle Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		for (const property in portfolio) {
			formData.append(property, portfolio[property]);
		}

		axios
			.post("/portfolio", formData)
			.then(() => {
				setSubmit(
					<span className="success">
						Portfolio added successfully...
					</span>
				);
				setPortfolio({
					title: "",
					heading: "",
					thumbnail: "",
					cover: "",
					skills: "",
					category: "",
					copyright: "",
					weburl: "",
					description: "",
				});
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
			{/* Navbar */}
			<Nav />

			{/* Portfolio Form */}
			<div className="form-container portfolio">
				<form onSubmit={handleSubmit}>
					<h2>Add New Portfolio</h2>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={portfolio.title}
						onChange={handleInput}
						required
					/>
					<input
						type="text"
						name="heading"
						placeholder="Heading"
						value={portfolio.heading}
						onChange={handleInput}
						required
					/>
					<label class="file portal-thumbnail">
						<input
							type="file"
							id="file"
							name="thumbnail"
							aria-label="File browser example"
							onChange={handleInput}
							required
						/>
						<span class="file-custom"></span>
					</label>
					<label class="file portal-cover">
						<input
							type="file"
							id="file"
							name="cover"
							aria-label="File browser example"
							onChange={handleInput}
							required
						/>
						<span class="file-custom"></span>
					</label>
					<input
						type="text"
						name="skills"
						placeholder="Skills"
						value={portfolio.skills}
						onChange={handleInput}
						required
					/>
					<input
						type="text"
						name="category"
						placeholder="Category"
						value={portfolio.category}
						onChange={handleInput}
						required
					/>
					<input
						type="text"
						name="copyright"
						placeholder="Copyright"
						value={portfolio.copyright}
						onChange={handleInput}
						required
					/>
					<input
						type="text"
						name="weburl"
						placeholder="Website URL"
						value={portfolio.weburl}
						onChange={handleInput}
						required
					/>
					<textarea
						name="description"
						cols="30"
						rows="6"
						placeholder="Description"
						onChange={handleInput}
						required
						value={portfolio.description}
					></textarea>

					{submit ? submit : <button type="submit">Publish</button>}
				</form>
			</div>
		</>
	);
}

//Export
export default Portfolio;
