import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import s from './App.css';
import Main from './components/main/Main';
import Basket from './components/basket/Basket';
import Checkout from './components/checkout/Checkout';
import Admin from './components/admin/Admin';
import AdminMain from './components/admin/adminMain/AdminMain';
import AdminElem from './components/admin/adminElem/AdminElem';
import NotFound from './components/notFound/NotFound';
import AdminReviews from './components/admin/adminReviews/AdminReviews';
import UpdateProducts from './components/updateProducts/UpdateProducts';
import AddProducts from './components/addProducts/AddProducts';
import AdminOrders from "./components/admin/adminOrders/AdminOrders";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/admin" element={<Admin/>}>
                        <Route path="main" element={<AdminMain/>}/>
                        <Route path="reviews" element={<AdminReviews/>}/>
                        <Route path="orders" element={<AdminOrders/>}/>
                        <Route path=":element_name" element={<AdminElem/>}/>
                        <Route path="updateProducts/:catalog_name/:id" element={<UpdateProducts/>}/>
                        <Route path="addProducts" element={<AddProducts/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;