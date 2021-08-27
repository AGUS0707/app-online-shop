import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/search.scss"


const Search = () => {

    return (
        <div className="search">
            <div className="container d-flex align-items-center justify-content-between">
                <div>
                    {/*<img src="/images/logo.jpg" width={"200"} height={"120"} alt=""/>*/}
                    <Link to="/" className="text-decoration-none"><h1 className="text-dark">LOGOTIP</h1></Link>
                </div>

                <div className="navplus">
                    <div className="d-flex align-items-center ">
                        <div>
                            <h1>Global laptop & monitor factory Store</h1>
                            <p><b>92.5%</b>Positive feedback</p>
                        </div>
                        <div className="ml-3">
                            <div className="follow">+ Follow</div>
                            <p><b>830</b>Followers</p>
                        </div>
                    </div>
                </div>

              <div>
                  <div className="qidiruv d-flex align-items-center">
                      <div className="d-flex align-items-center">
                          <input type="text" placeholder="search products" className="form-control w-100"/>
                          {/*<div className="bg-white">*/}
                          {/*    <select id="cars" name="cars" className="form-control">*/}
                          {/*        <option value="volvo">Categories</option>*/}
                          {/*        <option value="saab">Kompyuterlar</option>*/}
                          {/*        <option value="fiat">Texnikalar</option>*/}
                          {/*        <option value="audi">Telefonlar</option>*/}
                          {/*    </select>*/}
                          {/*</div>*/}

                      </div>
                      <div className="px-2">

                          <span className="icon icon-search"></span>

                      </div>
                  </div>
                  {/*<div className="search-bottom">*/}
                  {/*    <ul className="nav">*/}
                  {/*        <li className="nav-item"><a href="#" className="nav-link">Telefonlar</a></li>*/}
                  {/*        <li className="nav-item"><a href="#" className="nav-link">Aksessuarlar</a></li>*/}
                  {/*        <li className="nav-item"><a href="#" className="nav-link">Kompyuterlar</a></li>*/}
                  {/*        <li className="nav-item"><a href="#" className="nav-link">Maishiy texnika</a></li>*/}
                  {/*        <li className="nav-item"><a href="#" className="nav-link">Ofis texnikasi</a></li>*/}
                  {/*    </ul>*/}
                  {/*</div>*/}
              </div>

                <Link to="/home/shopping" className="korzinka">
                        <span className="icon icon-cart"></span>
                        <div className="count">0</div>
                </Link>
            </div>
        </div>
    );
};

export default Search;