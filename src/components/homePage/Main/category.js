import React from 'react';
import {Link} from 'react-router-dom';

function Category() {
    return (
        <div className="category">
            <div className="categoryContent">
                <div className="categoryIcon">
                    <img src="images/options-lines.svg" alt="no image"/>
                </div>
                <Link to={"/"}>Categories</Link>
            </div>
            <ul className="categoryList">
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Elektronika</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Xojalik Mollari</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Maishiy taexnikalar</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Kiyim kechaklar</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Oyinchoqlar</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Avtomobil qismlari</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Elektronika</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Xojalik Mollari</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Maishiy taexnikalar</Link>
                </li>
                <li className="categoryListItem">
                    <Link to={"/"} className="categoryListItemLink">Kiyim kechaklar</Link>
                </li>
            </ul>
        </div>
    );
}

export default Category;