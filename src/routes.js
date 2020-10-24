import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './view/homepage/homepage';
import ShopPage from './view/shop/shop';
import Header from './components/header/header.component'
import SignInSignUp from './view/sign-in-sign-up/sign-in-sign-up'


const Routes =()=>(
    <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/sign-in-sign-up" component={SignInSignUp}/>

    </Switch>
    </BrowserRouter>
);

export default Routes;