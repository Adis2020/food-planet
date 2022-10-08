import React from 'react';
import style from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const BasketElem = (props) => {
    return (
        <div className={style.elem}>
            <img src={props.img} alt=""/>
            <div>{props.title}</div>
            <input defaultValue={props.count}/>
            <div>{props.price}</div>
        </div>
    )
}

const Basket = () => {
    let data = [];
    const getElem = () => {
        if (localStorage.cart) {
            const burgerElem = JSON.parse(localStorage.getItem('cart'));
            return burgerElem.map(item => {
                data.push({
                    img: item.img,
                    title: item.title,
                    count: item.count,
                    price: item.price
                })
                return (
                    <BasketElem
                        id={item.id}
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        count={item.count}
                        price={item.price}
                    />
                )
            })
        }
    }
    const setElem = () => {
        let result = JSON.stringify(data)
        localStorage.setItem('basket', result);
    }
    return (
        <>
            <Header/>
            <h1 className={style.title}>Корзина</h1>
            <div className={style.basket}>
                <h3 className={style.product}>Продукт</h3>
                <h3>Название</h3>
                <h3>Количество</h3>
                <h3>Цена</h3>
            </div>
            <div className={style.elements}>
                {getElem()}
                <div className={style.buttonMove}>
                    <NavLink to={"/checkout"}>
                        <button className={style.button} onClick={setElem}>Оформить заказ</button>
                    </NavLink>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Basket;