import React from 'react';
import {Link} from "react-router-dom";
import "react-vis/dist/styles/legends.scss";
import "react-vis/dist/style.css"
import "react-vis/dist/main.scss";
import "react-vis/dist/animation"
import "react-vis/dist/index"
import "react-vis/dist/theme";
import "react-vis/dist/parallel-coordinates";
import "react-vis/dist/plot/borders"
import "react-vis/dist/radar-chart"
import "react-vis/dist/radial-chart"

import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';



const Statistics = (props) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    console.log(dd)
    // const dataArr = props.data.map((d)=> {
    //     return {x: d.year + '/' + d.quarter,
    //         y: parseFloat(d.count/1000)}
    // });
    let windowWidth=window.innerWidth;
    let responsiveWidth=73;
    let resultWidth=responsiveWidth*windowWidth/100;
    return (
        <div className="statistics">
            <div className="d-flex align-items-center buyurtmalar">
                <h3>Statistics</h3>
                <div className="d-flex align-items-center ml-5 media-none">
                    <Link to="/seller/statistics"><span className="icon icon-home"></span></Link>
                    <span className="icon icon-right mx-1"></span>
                    <Link className="text-decoration-none" to="/seller/statistics">Statistics</Link>
                </div>
            </div>
            <div className="cards">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="header d-flex align-items-center justify-content-between">
                                <p>Buyurtmalar</p>
                                <p>0%</p>
                            </div>
                            <div className="body d-flex align-items-center justify-content-between">
                                <span className="icon icon-cart2"></span>
                                <h1>0</h1>
                            </div>
                            <div className="foot">
                                <Link to="/seller/statistics/buyurtmalar">Ko'proq ...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="header d-flex align-items-center justify-content-between">
                                <p>Sotish</p>
                                <p>0%</p>
                            </div>
                            <div className="body d-flex align-items-center justify-content-between">
                                <span className="icon icon-card"></span>
                                <h1>0</h1>
                            </div>
                            <div className="foot">
                                <Link to="/seller/statistics/buyurtmalar">Ko'proq ...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="header d-flex align-items-center justify-content-between">
                                <p>Mijozlar</p>
                                <p>0%</p>
                            </div>
                            <div className="body d-flex align-items-center justify-content-between">
                                <span className="icon icon-users"></span>
                                <h1>0</h1>
                            </div>
                            <div className="foot">
                                <Link to="/seller/statistics/mijozlar">Ko'proq ...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tovarlarsongi">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex align-items-center">
                                    <span className="icon icon-cart2"></span>
                                    <p className="mb-0 ml-2">Oxirgi buyurtmalar</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Покупатель</th>
                                        <th>Состояние</th>
                                        <th>Добавлено</th>
                                        <th>Сумма</th>
                                        <th>Действие</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>sdsd</td>
                                        <td>sdsdf</td>
                                        <td>sdsdfsfdf</td>
                                        <td>sdsdfsfdfxcvdfgs</td>
                                        <td>sdsdfsfdfxcvdfgsgf</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="grafik">
                <XYPlot
                    style={{stroke:"rgba(0,0,0,0.68)", fontFamily:"sand-serif"}}
                    xType="ordinal"
                    width={resultWidth}
                    height={360}>
                    <VerticalGridLines style={{stroke:"rgba(11,9,9,0.87)", strokeWidth:0.1}} />
                    <HorizontalGridLines  style={{stroke:"#0B0909", strokeWidth:0.1}}/>
                    <XAxis title="Period of time(year and quarter)" />
                    <YAxis title="Number of pull requests (thousands)" />
                    <LineSeries
                        data={[
                            {x:0, y:0},
                            {x:3, y:6},
                            {x:6, y:3}
                        ]}
                        curve={'curveMonotoneX'}
                        style={{stroke: '#7696ff', strokeWidth: 2,}}/>
                </XYPlot>
            </div>
        </div>
    );
};

export default Statistics;