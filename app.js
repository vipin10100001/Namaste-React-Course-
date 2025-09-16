const heading= React.createElement("h1",{},"Namaste React from Javascript");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const topic=React.createElement("p",{},"This is a paragraph");
const root2=ReactDOM.createRoot(document.getElementById("root2"));
root2.render(topic);

const p2=React.createElement("p",{id: "para"},"This is a paragraph with id");
const root3=ReactDOM.createRoot(document.getElementById("root3"));
root3.render(p2);