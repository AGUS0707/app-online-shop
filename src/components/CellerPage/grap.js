/* App.js */
import {useEffect} from "react";

import React from 'react';
// var CanvasJSReact = require('./canvasjs.react');
import Canvas from 'react-konva';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import CanvasJSReact from 'react-konva';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Grap () {
    var dataPoints =[];



    useEffect(()=>{
        var chart = this.chart;
        fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                for (var i = 0; i < data.length; i++) {
                    dataPoints.push({
                        x: new Date(data[i].x),
                        y: data[i].y
                    });
                }
                chart.render();
            });
    }, [])


    const options = {
        theme: "light2",
        title: {
            text: "Stock Price of NIFTY 50"
        },
        axisY: {
            title: "Price in USD",
            prefix: "$"
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.00",
            dataPoints: dataPoints
        }]
    };
    return (
        <div>
            <CanvasJSChart options = {options}
                           onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}
 export default Grap;