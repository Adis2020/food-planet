import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import style from "./App.css";
import Main from "./components/main/Main";
import Basket from "./components/basket/Basket";
import Checkout from "./components/checkout/Checkout";
import Admin from "./components/admin/Admin";
import AdminMain from "./components/admin/adminMain/AdminMain";
import AdminBurger from "./components/admin/adminBurgers/AdminBurger";
import AdminPizzas from "./components/admin/adminPizzas/AdminPizzas";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/admin/panel" element={<AdminMain/>}/>
                <Route path="/admin/panel/burgers" element={<AdminBurger/>}/>
                <Route path="/admin/panel/pizzas" element={<AdminPizzas/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;