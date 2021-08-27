import React from 'react';
import {Link} from "react-router-dom";

const Statistics = (props) => {
    return (
        <div className="statistics">
            <div className="d-flex align-items-center buyurtmalar">
                <h3>Statistics</h3>
                <div className="d-flex align-items-center ml-5">
                    <Link to="/seller/statistics"><span className="icon icon-home"></span></Link>
                    <span className="icon icon-right mx-1"></span>
                    <Link className="text-decoration-none" to="/seller/statistics">Statistics</Link>
                </div>
            </div>
            <div className="cards">
                <div className="row">
                    <div className="col-4">
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
                    <div className="col-4">
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
                    <div className="col-4">
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
        </div>
    );
};

export default Statistics;