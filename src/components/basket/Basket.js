import React, {useEffect, useState} from 'react';
import s from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const BasketElem = (props) => {
    const [price, setPrice] = useState(parseInt(props.price.replace(/\D+/g, ""))); //Берём только цифры;
    let count = props.count;
    return (
        <tr className={s.elem}>
            <th><img src={props.img} alt=""/></th>
            <th>
                <div>{props.title}</div>
            </th>
            <th><input type="number" defaultValue={count} onInput={(e) => {
                count = e.target.value;
                setPrice(props.price.replace(/\D+/g, "")); //Берём только цифры
                setPrice(count * price)
            }}/></th>
            <th>
                <div>{price}</div>
            </th>
        </tr>
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
                    price: item.price,
                    id: item.id
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
        } else {
            return (
                <div className={s.notHave}>
                    <h2>Ой в корзине ничего нет</h2>
                </div>
            )
        }
    }
    const [price, setPrice] = useState(0);
    useEffect(() => {
        if (localStorage.cart) {
            const priceArray = data.map(item => {
                return parseInt(item.price.replace(/\D+/g, "")); //Берём цифры
            })
            const price = priceArray.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            })
            setPrice(price);
        }
    }, [price])
    const elem = getElem();
    const setElem = () => {
        let result = JSON.stringify(data)
        localStorage.setItem('basket', result);
    }
    return (
        <>
            <Header/>
            <div>
                <h1 className={s.title}>Корзина</h1>
                <table className={s.elements}>
                    <tbody className={s.element}>
                    <tr className={s.titleProducts}>
                        <th>Продукт</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                    {elem}
                    </tbody>
                </table>
                <div className={s.moveOutCome}>
                    <div className={s.outCome}>
                        <div>
                            <h3>Итого: {price} сом</h3>
                        </div>
                        <div className={s.buttonMove}>
                            <NavLink to={"/checkout"}>
                                <button className={s.button} onClick={setElem}>Оформить заказ</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Basket;