import React from 'react';
import style from "./Pizza.module.css";
import pizzaData from ".././data/pizzaData"

const Pizzas = () => {
    const pizzaElem = pizzaData.map((item, index) => {
        return (
            <div className={style.pizza} key={index}>
                <img src={item.img}/>
                <div className={style.mainText}>{item.title}</div>
                <div className={style.desc}>{item.desc}</div>
                <div className={style.price}>{item.price}</div>
                <div className={style.clicker}>
                    <div className={style.minus}>-</div>
                    <div className={style.number}>1</div>
                    <div className={style.plus}>+</div>
                </div>
                <button className={style.button}>В КОРЗИНУ</button>
            </div>
        )
    })
    return (
        <>
            <div className={style.pizzas}>
                {pizzaElem}
            </div>
            <div className={style.moveButtonMore}>
                <button className={style.buttonMore}>Показать ещё</button>
            </div>
        </>
    )
}

export default Pizzas;