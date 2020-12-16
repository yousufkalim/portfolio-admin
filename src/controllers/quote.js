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
const handleSubmit = (e, quote, setQuote, setAlert, setLoading) => {
	e.preventDefault();
	setLoading(true);

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
			setLoading(false);
			setAlert({
				status: true,
				alert: "Quote posted successfully...",
			});
			setQuote({ quote: "", author: "" });
		})
		.catch(() => {
			setLoading(false);
			setAlert({
				status: false,
				alert: "Opps an error accured...",
			});
		});
};

// Export
export { handleInput, handleSubmit };
