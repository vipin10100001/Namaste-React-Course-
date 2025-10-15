import React from "react";
import { createRoot } from "react-dom/client";

// --- Single heading ---
const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Namaste React from JavaScript"
);
const root = createRoot(document.getElementById("root"));
root.render(heading);

// --- Paragraph example ---
const topic = React.createElement("p", {}, "This is a paragraph");
const root2 = createRoot(document.getElementById("root2"));
root2.render(topic);

// --- Paragraph with ID ---
const p2 = React.createElement("p", { id: "para" }, "This is a paragraph with id");
const root3 = createRoot(document.getElementById("root3"));
root3.render(p2);

// --- Nested div structure (Example 1) ---
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      [React.createElement("h1", { key: "h1-1" }, "I'm h1 Tag")]
    ),
    React.createElement(
      "div",
      { id: "child", key: "child2" },
      [React.createElement("h1", { key: "h1-2" }, "I'm h1 Tag")]
    ),
  ]
);
const root4 = createRoot(document.getElementById("root4"));
root4.render(parent);

// --- Nested div structure (Example 2) ---
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      [
        React.createElement("h1", { key: "h1-1" }, "I'm h1x Tag"),
        React.createElement("h2", { key: "h2-1" }, "I'm h2 Tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child", key: "child2" },
      [
        React.createElement("h1", { key: "h1-2" }, "I'm h1 Tag"),
        React.createElement("h2", { key: "h2-2" }, "I'm h2 Tag"),
      ]
    ),
  ]
);
const root5 = createRoot(document.getElementById("root5"));
root5.render(parent2);
