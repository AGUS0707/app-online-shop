import React from 'react';
import {Link} from "react-router-dom";
function MarketList(props) {
    return (
        <div className="market">
            <div className="marketHeader d-flex justify-content-between">
                <div className="marketHeaderLeft d-flex align-items-center">
                    <h2>Marketing kompaniyasi</h2>
                    <div className="homeIcon">
                        <img src="/images/home.svg" alt="no image"/>
                    </div>
                    <div className="nextIcon">
                        <img src="/images/next.svg" alt="no image"/>
                    </div>
                    <Link to="/">Marketing kompaniyasi</Link>
                </div>
                <div className="marketHeaderRight d-flex justify-content-end">
                    <div className="marketHeaderRightContent d-flex ">
                        <Link to="/seller/market/form">
                            <span className="img"></span>
                        </Link>
                        <Link>
                            <span className="img"></span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="marketMain">
                <div className="marketList">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="marketListHeader d-flex">
                                <img src="/images/options-lines.svg" alt="no images"/>
                                <h4>Marketing kompaniyasi</h4>
                            </div>
                            <div className="marketListTable">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th className="text-left"><input type="checkbox" className='form-control'/></th>
                                        <th className="text-left">Reklama nomi</th>
                                        <th className="text-left">Kod</th>
                                        <th className="text-right">Otishlar</th>
                                        <th className="text-right">Buyurtmalr</th>
                                        <th className="text-left">sana</th>
                                        <th>Harakat</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-left"><input type="checkbox" className='form-control'/></td>
                                        <td className="text-left ">Elektronika</td>
                                        <td>61238869edd58</td>
                                        <td className="text-right">0</td>
                                        <td className="text-right">0</td>
                                        <td className="text-left">23.08.2021</td>
                                        <td><Link to="/seller/market/form"><span className="editIcon"></span></Link></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="filterContent">
                                <div className="filterHeader d-flex">
                                    <img src="/images/filtr.png" alt="no image"/>
                                    <h3>Filterlash</h3>
                                </div>
                                <div className="filterMain">
                                    <div className="filterForm">
                                        <label htmlFor="reklama">Reklama nomi
                                            <input type="text" placeholder="Reklama nomi" id="reklama" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="kuzatuv_kodi">Kuzatuv kodi
                                            <input type="text" placeholder="Kuzatuv kodi" id="kuzatuv_kodi" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <label htmlFor="date">
                                            Sana
                                            <input type="date" id="date" className="form-control"/>
                                        </label>
                                        <hr/>
                                        <div className="filterButton d-flex justify-content-end">
                                            <button className="btn d-flex align-items-center">
                                                <img src="/images/filtr.png" alt="no image"/>
                                                Filtrlash
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketList;