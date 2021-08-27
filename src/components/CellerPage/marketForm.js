import React from 'react';
import {Link} from "react-router-dom";

function MarketForm(props) {
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
                        <button>
                            <span className="img"></span>
                        </button>
                        <button>
                            <span className="img"></span>
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="marketMain">
                <div className="marketForm">
                    <div className="marketFormHeader d-flex">
                        <img src="/images/pen.svg" alt="no image"/>
                        <h3>Qoshish</h3>
                    </div>
                    <div className="marketFormMain">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Reklama nomi
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="reklama nomi" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Aktsiyaning tavsifi
                                </div>
                                <div className="col-sm-10">
                                    <textarea placeholder="Aktsiyaning tavsifi" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Kuzatuv kodi
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="reklama nomi" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Misol
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="reklama nomi" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 ">
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="reklama nomi" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Boshlanish vaqti
                                </div>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Tugash vaqti
                                </div>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketForm;