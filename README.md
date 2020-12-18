# Getting Started with Portfolio

This is the public version of my portfolio website's Portal \
After a long time I made the source code of my personal website public. \
I made this saperate public repo to protect my secret information on production build. \
I don't update this public repository often. \
Last updated on 18-Dec-2020

This portal is built in React. \
This portal is linked with [Portfolio](https://github.com/yousufkalim/react-portfolio) website. \
I used firebase with these two projects. \
If you want to use your own back-end, Then please see the "node-backEnd" branch of this repo. \
You need to understand that how these two projects are communicating with each other using firebase.

## Prerequisites

**Step 1**

Go to src/firebase.js \
Add the configuration of your firebase Portal project, So we can use firebase as back-end for authentication and database etc.

**If you want to use your own back-end then you don't need first step**

Just clone the "node-backEnd" branch of this repo. \
And configure it with your custom back-end.

## Initialize the Project

In the project directory, you can run:

### `npm install`

Install all the dependencies that used in this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
