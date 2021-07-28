import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log("React Loaded");
//import BluePrint
import { Button } from "@blueprintjs/core";

console.log("Blueprint Loaded");

//CSS for BluePrint
import "../node_modules/normalize.css/normalize.css"
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css"

function App () {
    const onClick = () => {
        console.log("Hello World")
    }
    return (<div>
                <div><h1>Hello! From React</h1></div>
                <Button onClick={onClick}>Hello</Button>
            </div>
            )
}

function render() {
  ReactDOM.render(<App/>, document.getElementById("root"));
}

render();