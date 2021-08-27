import React from 'react';

function ReceiveEmail(props) {
    const [clickBtn, setClickBtn]=React.useState(false);
    function clickbtn() {
        setClickBtn(!clickBtn);
    }
    return (
        <div className="receiveEmail">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="receiveEmailContent">
                            <div className="receiveEmailContentLeft">
                                <h5>Elektron pochta xabarnomalarini oling</h5>
                               <p> AliExpress -dan takliflar, kuponlar, mahsulot tavsiyalari va xizmatlari bilan elektron
                                   pochta xabarlarini olish uchun faollashtiring.</p>
                            </div>
                            <div className="receiveEmailContentRight">
                                <span>{clickBtn?" Ochirilgan":"Yoqilgan "}</span>
                                <button className={`btn ${clickBtn? "btnBlock": " "}` } onClick={clickbtn}>{clickBtn?"Yoqish": "Ochirish"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReceiveEmail;