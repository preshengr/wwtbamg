/*
 * Importing the React library, which is required to build components.
 */
import React from "react";

/*
 * Importing the ReactDOM package, which is responsible for rendering React components to the DOM.
 */
import ReactDOM from "react-dom/client";

/*
 * Importing the main App component, which contains the primary structure of the application.
 */
import App from "./App";

/*
 * Getting the root DOM element by its ID ('root') and creating a React root object for rendering the app.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 * Rendering the App component wrapped in React.StrictMode to highlight potential problems in the application.
 * StrictMode helps in identifying unsafe lifecycle methods, legacy API usage, and other potential issues.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
