import firebase from "../firebase";

class MyUploadAdapter {
	constructor(loader) {
		this.loader = loader;
	}
	// Starts the upload process.
	upload() {
		return this.loader.file.then(
			(file) =>
				new Promise((resolve, reject) => {
					let storage = firebase.storage().ref(`blog/articles`);
					let uploadTask = storage
						.child(Date.now() + "-" + file.name)
						.put(file);
					uploadTask.on(
						"state_changed", // or 'state_changed'
						function (snapshot) {
							// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
							var progress =
								(snapshot.bytesTransferred /
									snapshot.totalBytes) *
								100;
							console.log("Upload is " + progress + "% done");
							switch (snapshot.state) {
								case firebase.storage.TaskState.PAUSED: // or 'paused'
									console.log("Upload is paused");
									break;
								case firebase.storage.TaskState.RUNNING: // or 'running'
									console.log("Upload is running");
									break;
							}
						},
						function (error) {
							// A full list of error codes is available at
							// https://firebase.google.com/docs/storage/web/handle-errors
							// eslint-disable-next-line default-case
							switch (error.code) {
								case "storage/unauthorized":
									reject(
										" User doesn't have permission to access the object"
									);
									break;

								case "storage/canceled":
									reject("User canceled the upload");
									break;

								case "storage/unknown":
									reject(
										"Unknown error occurred, inspect error.serverResponse"
									);
									break;
							}
						},
						function () {
							// Upload completed successfully, now we can get the download URL
							uploadTask.snapshot.ref
								.getDownloadURL()
								.then(function (downloadURL) {
									// console.log("File available at", downloadURL);
									resolve({
										default: downloadURL,
									});
								});
						}
					);
				})
		);
	}
}

export default MyUploadAdapter;
