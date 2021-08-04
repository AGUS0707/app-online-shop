import "./css/app.css";
import Home from "./components/home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path={"/"} exact component={Home}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
