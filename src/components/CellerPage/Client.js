import React from 'react';

import {Link} from "react-router-dom";

const Client = (props) => {
    return (
      <>
          <div className="d-flex align-items-center buyurtmalar">
              <h3>Client</h3>
              <div className="d-flex align-items-center ml-5">
                  <Link to="/seller/statistics"><span className="icon icon-home"></span></Link>
                  <span className="icon icon-right mx-1"></span>
                  <Link className="text-decoration-none" to="/seller/statistics/mijozlar">Client</Link>
              </div>
          </div>
                Client
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-header">
                          <div className="d-flex align-items-center">
                              <span className="icon icon-menu"></span>
                              <p className="mb-0 ml-3">Список клиентов</p>
                          </div>
                      </div>
                      <div className="card-body">
                          <table className="table table-hover table-striped">
                              <thead>
                              <tr>
                                  <th>Имя клиента</th>
                                  <th>E-Mail</th>
                                  <th>Группа клиента</th>
                                  <th>Статус</th>
                                  <th>IP</th>
                                  <th>Дата добавления</th>
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

export default Client;