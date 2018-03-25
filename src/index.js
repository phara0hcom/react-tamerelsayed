import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";



import App from "./containers/Home";



ReactDOM.render(<App />, document.getElementById("index"));
registerServiceWorker();
