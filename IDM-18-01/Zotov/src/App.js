import React, { Component , Fragment} from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import withLayout from './components/Layout';
import lab1 from "./pages/lab1";
import lab2 from "./pages/lab2";
import lab3 from "./pages/lab3";
import exam from "./pages/exam";

import 'normalize.css';
import './styles/index.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/" component={() => <Redirect to="/lab-1" />}/>
                    <Route path="/lab-1" exact component={lab1}/>
                    <Route path="/lab-2" component={lab2}/>
                    <Route path="/lab-3" component={lab3}/>
                    <Route path="/exam" component={exam}/>
                </Fragment>
            </Router>
        )
    }
}


export default App;
