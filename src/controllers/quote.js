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
const handleSubmit = (e, quote, setQuote, setAlert) => {
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
			setAlert({
				status: true,
				alert: "Quote posted successfully...",
			});
			setQuote({ quote: "", author: "" });
		})
		.catch(() => {
			setAlert({
				status: false,
				alert: "Opps an error accured...",
			});
		});
};

// Export
export { handleInput, handleSubmit };
