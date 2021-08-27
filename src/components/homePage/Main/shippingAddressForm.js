import React from 'react';

function ShippingAddressForm(props) {
    return (
        <div className="shippingAddress">
            <div className="container">
                <h3>Mening yetkazib berish manzilim</h3>
                <form className="shippingForm">
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Contact</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="nameInput">
                                <input type="text" className="form-control gg" placeholder="Ism"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text"  value={"+998"} disabled  className="form-control" />
                                <input type="number" className="form-control" placeholder={"Telefon raqam"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="selectForm">
                            <div className="region">
                                <select className="form-control" name="viloyat">
                                    <option value="and">Andijon</option>
                                    <option value="far">Fargona</option>
                                    <option value="nam">Namangan</option>
                                </select>
                            </div>
                            <div className="district">
                                <select className="form-control" name="district">
                                    <option value="izb">Izbosgan</option>
                                    <option value="bal">Baliqchi</option>
                                    <option value="bal">Baliqchi</option>
                                </select>
                            </div>
                            <div className="pochtaIndeksi">
                                <input type="text" className="form-control" placeholder="Pochta indeksi"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Manzil</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="addressInput">
                                <input type="text" className="form-control" placeholder={"Kocha uy/kvartira/birlik"}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="addressInput">
                                <input type="text" className="form-control" placeholder={"Apt , Suit,  Unit"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mainChecked">
                                <input type="checkbox" className="form-control"/>
                                <div className="mainCheckedText">Odatiy qilib sozlash</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                             <button type="submit" >
                                Saqlash
                             </button>
                            <button type="reset">
                                Bekor qilish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShippingAddressForm;