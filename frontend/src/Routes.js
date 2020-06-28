import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddTrain from './admin/AddTrain';
import Shop from './core/Shop';
import Train from './core/Train';
import Cart from './core/Cart';
//import ManageTrains from './admin/ManageTrains';
//import UpdateTrain from './admin/UpdateTrain';
//import UpdateCategory from './admin/updateCategory';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/category/create" exact component={AddCategory} />
                <AdminRoute path="/create/train" exact component={AddTrain} />
                <Route path="/train/:trainId" exact component={Train} />
                <Route path="/cart" exact component={Cart} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;