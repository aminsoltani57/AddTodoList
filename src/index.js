
//#IMR
//import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
// import "./App.css";
///# createElement(1what to build, 2object(properties of builder) 3what is in the builder )
///# we use className because we use class in css
//#React: using to create new change on html
//const element = React.createElement( "div", 
//{id:"title", className:"app-title"},
 //"this is first app"
 //);
///#render method:(1what to render 2where  to render)
///#ReactDOM: USING TO ACHIVE MAIN DOM

ReactDOM.render(<App />, document.getElementById("root"));
