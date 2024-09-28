const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello I'am a h1 tag of child1"),
    React.createElement("h2", {}, "Hello I'am a h2 tag of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I'am a h1 tag of child2"),
    React.createElement("h2", {}, "Hello I'am a h2 tag of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(parent);
