import React from "react";
import ReactDOM from "react-dom/client";
//using JS
let head=document.getElementById("root-JS");
let elem=document.createElement("h1")
elem.innerHTML="HELLO WORLD IN JS";
head?.append(elem);

//using REACT --create elements
let parent=React.createElement("div",{id:"parent"},
    React.createElement("h1",{},"Hello WOrld in React!!")
)
let root=ReactDOM.createRoot(document.getElementById("root-React"));
root.render(parent);

//Create Nested elements in React
let parent2=[React.createElement("div",
    {id:"parent1"},
    [React.createElement("h1",{id:"child1"},"Hello WOrld in React 1!!"),
    React.createElement("h2",{id:"child2"},"Hello WOrld in React 2!!")]
),
    React.createElement("div",
    {id:"parent2"},
    [React.createElement("h1",{id:"child3"},"Hello WOrld in React 3!!"),
    React.createElement("h2",{id:"child4"},"Hello WOrld in React 4!!")]
)];
let root1=ReactDOM.createRoot(document.getElementById("root-NestedR"));
root.render(parent2);