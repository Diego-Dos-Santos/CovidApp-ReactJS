import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Main from './containers/main/mainContainer';
import Countries from './containers/countries';
import Login from './containers/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/paises" component={Countries} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;