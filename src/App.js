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
import AdminSushi from "./components/admin/adminSushi/AdminSushi";
import AdminRolls from "./components/admin/adminRolls/AdminRolls";
import AdminDrinks from "./components/admin/adminDrinks/AdminDrinks";
import AdminDeserts from "./components/admin/adminDeserts/AdminDeserts";
import AdminSalats from "./components/admin/adminSalats/AdminSalats";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/admin" element={<Admin/>}>
                    <Route path="main" element={<AdminMain/>}/>
                    <Route path="burgers" element={<AdminBurger/>}/>
                    <Route path="pizzas" element={<AdminPizzas/>}/>
                    <Route path="sushis" element={<AdminSushi/>}/>
                    <Route path="rolls" element={<AdminRolls/>}/>
                    <Route path="drinks" element={<AdminDrinks/>}/>
                    <Route path="deserts" element={<AdminDeserts/>}/>
                    <Route path="salats" element={<AdminSalats/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;