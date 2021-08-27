import React from 'react';
import { Switch, Route} from "react-router-dom";
import MarketList from "./marketList";
import MarketForm from "./marketForm";

const Market = (props) => {
    return (
        <>
            <Switch>
                <Route path="/seller/market" exact component={MarketList}/>
                <Route path="/seller/market/form" component={MarketForm}/>
            </Switch>
        </>
    );
};

export default Market;