const parent = React.createElement('div',{id : "parent"},
    [React.createElement("div",{id:"child"},

        [React.createElement("h1",{},"HELOO MAN"),React.createElement("h1",{},"HELOO MAN")]
    ),React.createElement("div",{id: "child2"},

        [React.createElement("h1",{},"HELOO MAN"),React.createElement("h1",{},"HELOO MAN")]
    )]


)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)