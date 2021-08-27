import React from 'react';

function PasswordUpdate(props) {
    function handleInputChange() {

    }
    return (
        <div className="passwordUpdate">
            <div className="container">
                <h3>Parolni ozgartirish</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="passwordInputGroup">
                            <tr className="old-password">
                                <label htmlFor="old-password">Old password</label>
                                <input type="password" className="form-control" name="password" placeholder="Eski passwordni kiriting"/>
                            </tr>
                            <tr className="new-password-1">
                                <label htmlFor="new-password-1">New Password</label>
                                <input type="password" className="form-control" name="new-password-1" placeholder="Ynagi passwordni kiriting"/>
                            </tr>
                            <tr className="new-password-2">
                                <label htmlFor="new-password-2">New Password</label>
                                <input type="password" className="form-control" name="new-password-2" placeholder="Yangi passwordni kiriting"/>
                            </tr>
                            <div className="updatePasswordButton">
                                <button>Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordUpdate;