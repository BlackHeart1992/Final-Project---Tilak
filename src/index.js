const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./components/app");

let target = document.querySelector("#app");

//  Component to load and where to show it
ReactDOM.render(<App />, target);
