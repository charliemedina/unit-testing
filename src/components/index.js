import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppRoot />, document.getElementById("root"));
registerServiceWorker();