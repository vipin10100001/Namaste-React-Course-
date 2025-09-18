const heading= React.createElement("h1",{id: "heading",abc:"xyz"},"Namaste React from Javascript");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

const topic=React.createElement("p",{},"This is a paragraph");
const root2=ReactDOM.createRoot(document.getElementById("root2"));
root2.render(topic);

const p2=React.createElement("p",{id: "para"},"This is a paragraph with id");
const root3=ReactDOM.createRoot(document.getElementById("root3"));
root3.render(p2);

// <div id="parent">
// <div id="child">
// <h1>I'm h1 Tag
// </h1>
// </div>
// </div>
// COnverting to react code 

const parent=React.createElement("div",{id: "parent"},[React.createElement("div",{id: "child"},[React.createElement(
    "h1",{},"I'm h1 Tag")]),React.createElement( "div",{id: "child"},[React.createElement("h1",{},"I'm h1 Tag")])]);

const root4=ReactDOM.createRoot(document.getElementById("root"));
root4.render(parent);