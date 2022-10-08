import React, {useEffect, useState} from 'react';
import s from "./Pizza.module.css";
import api from "../data/api";
import Element from '../elements/Elements';

const PizzaElem = (props) => {
    let [quality, setQuality] = useState(1);
    return (
        <div className={s.pizza} key={props.id}>
            <img src={props.img}/>
            <div className={s.mainText}>{props.title}</div>
            <div className={s.desc}>{props.desc}</div>
            <div className={s.price}>{props.price}</div>
            <div className={s.clicker}>
                <button className={s.minus} onClick={() => setQuality(quality - 1)}>-</button>
                <div className={s.number}>{quality}</div>
                <button className={s.plus} onClick={() => setQuality(quality + 1)}>+</button>
            </div>
            <button className={s.button}>В КОРЗИНУ</button>
        </div>
    )
}

const Pizzas = () => {
    let [pizzas, setPizzas] = useState([]);
    const getData = () => {
        fetch(api.pizzas)
            .then(response => response.json())
            .then(data => setPizzas(data))
    }
    useEffect(() => {
        getData();
    }, [])
    const pizzaElem = pizzas.map(item => {
        return (
            <PizzaElem
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
            />
        )
    })
    return (
        <>
            <div className={s.pizzas}>
                {pizzaElem}
            </div>
            <div className={s.moveButtonMore}>
                <button className={s.buttonMore}>Показать ещё</button>
            </div>
        </>
    )
}

export default Pizzas;