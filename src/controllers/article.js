// Firebase
import { storage, db } from "../firebase";

// Handle Image Input
const handleImage = (e, setBlog, setProgress) => {
	// Firbase upload
	const image = e.target.files[0];
	const name = Date.now() + "-" + image.name;
	const uploadTask = storage.ref(`blog/thumbnails/${name}`).put(image);
	uploadTask.on(
		"state_changed",
		(snapshot) => {
			let progress =
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			setProgress(progress);
		},
		(error) => console.log(error),
		() => {
			uploadTask.snapshot.ref.getDownloadURL().then((url) => {
				setBlog((prev) => {
					return {
						...prev,
						image: url,
					};
				});
			});
		}
	);
};

// Handle Text Input
const handleInput = (e, setBlog) => {
	setBlog((prev) => {
		return {
			...prev,
			[e.target.name]: e.target.value,
		};
	});
};

// Handle Submit
const handleSubmit = (e, blog, setBlog, setProgress, setAlert) => {
	e.preventDefault();

	const link = "/blog/" + blog.title.split(" ").join("-").toLowerCase();

	db.collection("articles")
		.add({
			link: link,
			image: blog.image,
			title: blog.title,
			description: blog.description,
			blog: blog.blog,
			dateCreated:
				new Date().toLocaleTimeString() +
				" - " +
				new Date().toLocaleDateString(),
		})
		.then(() => {
			setAlert({ status: true, alert: "Article posted successfully..." });
			setProgress(0);
			setBlog({
				image: "",
				title: "",
				description: "",
				blog: "",
			});
		})
		.catch(() => {
			setAlert({ status: false, alert: "Opps an error accured..." });
		});
};

// Export
export { handleImage, handleInput, handleSubmit };
