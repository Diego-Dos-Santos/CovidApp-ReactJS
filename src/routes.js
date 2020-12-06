import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Main from './pages/main';
import Countries from './pages/countries';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Main}/>
        <Route path="/paises" component={Countries} />
    </BrowserRouter>
);

export default Routes;