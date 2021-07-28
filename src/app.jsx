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

//import scichart

/*import {SciChartSurface} from "../node_modules/scichart/charting/Visuals/SciChartSurface";
import {NumericAxis} from "../node_modules/scichart/charting/Visuals/Axis/NumericAxis";

console.log("imported scichart")

SciChartSurface.setRuntimeLicenseKey("");

console.log("Set Scichart license key")

async function initSciChart() {
  // Create the SciChartSurface in the div 'scichart-root'
  // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
  // instance must be passed to other types that exist on the same surface.
  const {sciChartSurface, wasmContext} = await SciChartSurface.create("scichart-root");
  // Create an X,Y Axis and add to the chart
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);
 
  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);
  // That's it! You just created your first SciChartSurface!
}

initSciChart();*/

console.log("SciChart Initialized")

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