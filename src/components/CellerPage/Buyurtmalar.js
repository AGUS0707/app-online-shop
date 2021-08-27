import React from 'react';
import {Link} from "react-router-dom";

const Buyurtmalar = (props) => {
    return (
        <>
            <div className="d-flex align-items-center buyurtmalar">
                <h3>Buyurtmalar</h3>
                <div className="d-flex align-items-center ml-5">
                    <Link to="/seller/statistics"><span className="icon icon-home"></span></Link>
                    <span className="icon icon-right mx-1"></span>
                    <Link className="text-decoration-none" to="/seller/statistics/buyurtmalar">Buyurtmalar</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center">
                                <span className="icon icon-menu"></span>
                                <p className="mb-0 ml-3">Список заказов</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-hover table-striped">
                                <thead>
                                <tr>
                                    <th>№ Buyurtma</th>
                                    <th>Клиент</th>
                                    <th>Статус</th>
                                    <th>Итого</th>
                                    <th>Дата добавления</th>
                                    <th>Дата изменения</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Buyurtmalar;