//Init
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//Controllers
import { handleImage, handleInput, handleSubmit } from "../controllers/article";
import MyUploadAdapter from "../controllers/MyUploadAdapter";

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
	let [alert, setAlert] = useState(null);

	// Image Upload Progress State
	let [progress, setProgress] = useState(0);

	// Return Component
	return (
		<>
			{/* Nav */}
			<Nav />

			{/* Post Form */}
			<div className="form-container post">
				<form
					onSubmit={(e) =>
						handleSubmit(e, blog, setBlog, setProgress, setAlert)
					}
				>
					<h2>Add New Post</h2>
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
					<label className="file">
						<input
							type="file"
							id="file"
							aria-label="File browser example"
							onChange={(e) =>
								handleImage(e, setBlog, setProgress)
							}
							required
						/>
						<span class="file-custom"></span>
						<progress value={progress} max="100"></progress>
					</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title"
						value={blog.title}
						onChange={(e) => handleInput(e, setBlog)}
						required
					/>
					<textarea
						name="description"
						cols="30"
						rows="3"
						placeholder="Description"
						onChange={(e) => handleInput(e, setBlog)}
						value={blog.description}
					></textarea>

					{/* Ck Editor */}
					<div className="post-editor">
						<CKEditor
							editor={ClassicEditor}
							data={blog.blog}
							onReady={(editor) => {
								editor.plugins.get(
									"FileRepository"
								).createUploadAdapter = (loader) => {
									return new MyUploadAdapter(loader);
								};
							}}
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

					<button type="submit">Publish</button>
				</form>
			</div>
		</>
	);
}

// Export
export default Article;
