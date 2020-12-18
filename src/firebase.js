// Init
import firebase from "firebase";

// Firebase configuration
const firebaseConfig = {
	// Add the configuration of your firebase project
	// We have to fetch articles, portfolio and quotes from database in this case I have used firestore database from Portal project
	// We have to post articles, portfolios, quotes and images to firebase
	// If you want to use your own custom back-end then please see "node-backEnd" branch of this repo
	// For more info read the Readme.md
};

// Intializing App
firebase.initializeApp(firebaseConfig);

// Initializing firebase features
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// Export
export { auth, storage, db };
