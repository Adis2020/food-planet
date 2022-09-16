import React from 'react';
import style from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

let data = [];

const BasketElem = (props) => {
    let img = props.img;
    let title = props.title;
    let price = props.price;
    let number = props.number;
    const dataBurger = {
        img: img,
        title: title,
        price: price,
        number: number,
    }
    data.push(dataBurger)
    sessionStorage.setItem("basket", JSON.stringify(data));
    return (
        <div className={style.elem}>
            <img src={props.img} alt=""/>
            <div>{props.title}</div>
            <input defaultValue={props.number}/>
            <div>{props.price}</div>
        </div>
    )
}

const Basket = () => {
    const elems = () => {
        if (sessionStorage.burger) {
            const burgerElem = JSON.parse(sessionStorage.getItem("burger"));
            return burgerElem.map((item, index) => {
                return (
                    <BasketElem
                        key={index}
                        img={item.img}
                        title={item.title}
                        number={item.number}
                        price={item.price}
                    />
                )
            })
        }
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
                {elems()}
                <div className={style.buttonMove}>
                    <NavLink to={"/checkout"}>
                        <button className={style.button}>Оформить заказ</button>
                    </NavLink>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Basket;