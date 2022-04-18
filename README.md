# Workflow Microfrontend

This Application provides a Micro frontend interaction for Workflow Engine

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3010](http://localhost:3010) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm lint`

Runs the check for basic linting errors.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
Ejects all the create-react-app and react rewired configurations.

## Libraries
1. [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
   1. To over ride the configurations provided by the create-react-app
2. [rematch](https://github.com/rematch/rematch)
   1. Rematch was chosen because of the developers familiarity with the redux framework, while cutting down
   significant amount of configuration required with redux.
   2. Other Library in consideration was `redux-toolkit`, which was significantly complex when it comes to
   implementing the same functionality