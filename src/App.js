import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import style from './App.css';
import Main from './components/main/Main';
import Basket from './components/basket/Basket';
import Checkout from './components/checkout/Checkout';
import Admin from './components/admin/Admin';
import AdminMain from './components/admin/adminMain/AdminMain';
import AdminElem from './components/admin/adminElem/AdminElem';
import NotFound from './components/notFound/NotFound';
import AdminReviews from "./components/admin/adminReviews/AdminReviews";
import UpdateProducts from "./components/updateProducts/UpdateProducts";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/updateProducts/:catalog_name/:id" element={<UpdateProducts/>}/>
                <Route path="/admin" element={<Admin/>}>
                    <Route path="main" element={<AdminMain/>}/>
                    <Route path="reviews" element={<AdminReviews/>}/>
                    <Route path=":element_name" element={<AdminElem/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;