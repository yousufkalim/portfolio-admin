// Firebase
import { storage, db } from "../firebase";

// Handle Input
const handleInput = (e, setPortfolio, setProgress) => {
	if (e.target.name === "thumbnail" || e.target.name === "cover") {
		const image = e.target.files[0];
		const name = Date.now() + "-" + image.name;
		const uploadTask = storage
			.ref(`portfolio/${e.target.name}s/${name}`)
			.put(image);

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
					setPortfolio((prev) => {
						return {
							...prev,
							[e.target.name]: url,
						};
					});
				});
			}
		);
	} else {
		setPortfolio((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	}
};

// Handle Submit
const handleSubmit = (
	e,
	portfolio,
	setPortfolio,
	setAlert,
	setThumbnailProgress,
	setCoverProgress,
	setLoading
) => {
	e.preventDefault();
	setLoading(true);

	// Making Link
	const link =
		"/portfolio/" + portfolio.heading.split(" ").join("-").toLowerCase();

	// Post data to firestore
	db.collection("portfolios")
		.add({
			link: link,
			title: portfolio.title,
			heading: portfolio.heading,
			thumbnail: portfolio.thumbnail,
			cover: portfolio.cover,
			skills: portfolio.skills,
			category: portfolio.category,
			copyright: portfolio.copyright,
			weburl: portfolio.weburl,
			description: portfolio.description,
			dateCreated:
				new Date().toLocaleTimeString() +
				" - " +
				new Date().toLocaleDateString(),
		})
		.then(() => {
			setLoading(false);
			setAlert({
				status: true,
				alert: "Portfolio added successfully...",
			});
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
			setThumbnailProgress(0);
			setCoverProgress(0);
		})
		.catch(() => {
			setLoading(false);
			setAlert({ status: false, alert: "Opps an error accured..." });
		});
};

// Export
export { handleInput, handleSubmit };
