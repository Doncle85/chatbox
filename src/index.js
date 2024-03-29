import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from "./Components/Connexion";
import reportWebVitals from './reportWebVitals';
import NotFound from "./Components/NotFound";

import  { BrowserRouter,Route, Switch} from "react-router-dom";

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route path='/pseudo/:pseudo' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(
<Root/>,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
