// Firebase
import { db } from "../firebase";

//Handle Input
const handleInput = (e, setQuote) => {
	setQuote((prev) => {
		return {
			...prev,
			[e.target.name]: e.target.value,
		};
	});
};

//Handle Submit
const handleSubmit = (e, quote, setQuote, setSubmit) => {
	e.preventDefault();

	db.collection("quotes")
		.add({
			quote: quote.quote,
			author: quote.author,
			dateCreated:
				new Date().toLocaleTimeString() +
				" - " +
				new Date().toLocaleDateString(),
		})
		.then(() => {
			setSubmit(
				<span className="success">Quote posted successfully...</span>
			);
			setQuote({ quote: "", author: "" });
		})
		.catch(() => {
			setSubmit(<span className="error">Opps an error accured...</span>);
		});
};

// Export
export { handleInput, handleSubmit };
