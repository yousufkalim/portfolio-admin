//Init
import React, { useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//Nav
import Nav from "./Nav";

//Style
import "../style/Article.css";

// Blog Post Component
function Article() {
	// Initializing State
	let [blog, setBlog] = useState({
		image: "",
		title: "",
		description: "",
		blog: "",
	});
	let [submit, setSubmit] = useState("");

	//Handle Image Input
	const handleImage = (e) => {
		setBlog((prev) => {
			return {
				...prev,
				image: e.target.files[0],
			};
		});
	};

	// Handle Text Input
	const handleInput = (e) => {
		setBlog((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	// Handle Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();

		for (const property in blog) {
			formData.append(property, blog[property]);
		}

		axios
			.post("/blog", formData)
			.then(() => {
				setSubmit(
					<span className="success">
						Article posted successfully...
					</span>
				);
				setBlog({
					image: "",
					title: "",
					description: "",
					blog: "",
				});
			})
			.catch(() => {
				setSubmit(
					<span className="error">Opps an error accured...</span>
				);
			});
	};

	// Return Component
	return (
		<>
			{/* Nav */}
			<Nav />

			{/* Post Form */}
			<div className="form-container post">
				<form onSubmit={handleSubmit}>
					<h2>Add New Post</h2>
					<label class="file">
						<input
							type="file"
							id="file"
							aria-label="File browser example"
							onChange={handleImage}
							required
						/>
						<span class="file-custom"></span>
					</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title"
						value={blog.title}
						onChange={handleInput}
						required
					/>
					<textarea
						name="description"
						cols="30"
						rows="3"
						placeholder="Description"
						onChange={handleInput}
						value={blog.description}
					></textarea>

					{/* Ck Editor */}
					<div className="post-editor">
						<CKEditor
							config={{
								ckfinder: {
									// Upload the images to the server using the CKFinder QuickUpload command.
									uploadUrl: "/blog/article-image",
								},
							}}
							editor={ClassicEditor}
							data={blog.blog}
							onChange={(event, editor) => {
								const data = editor.getData();
								setBlog((prev) => {
									return {
										...prev,
										blog: data,
									};
								});
							}}
						/>
					</div>

					{submit ? submit : <button type="submit">Publish</button>}
				</form>
			</div>
		</>
	);
}

// Export
export default Article;
