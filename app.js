import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement('div',{id : "parent"},
    [React.createElement("div",{id:"child"},

        [React.createElement("h1",{},"Kratos"),React.createElement("h1",{},"Kratos")]
    ),React.createElement("div",{id: "child2"},

        [React.createElement("h2",{},"Kratos"),React.createElement("h3",{},"Kratos")]
    )]


)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)