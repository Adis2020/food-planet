import React, {useState} from 'react';
import style from "./Menu.module.css";
import api from "../data/api";
import productManager from "../../manager/product.manager";

const Element = (props) => {
    let [quality, setQuality] = useState(1);
    if (quality < 1) {
        setQuality(1);
    }
    const addProducts = () => {
        const obj = {count: quality, ...props}
        const products = productManager.getProduct();
        let data;
        if (products) {
            const checkResult = productManager.checkProduct(props.id, products);
            if (checkResult === -1) {
                products.push(obj);
            } else {
                products[checkResult].count = ++products[checkResult].count;
            }
            data = products;
        } else {
            data = [obj];
        }
        productManager.setProduct(JSON.stringify(data));
    }
    return (
        <div className={style.elem}>
            <img src={props.img}/>
            <div className={style.mainText}>{props.title}</div>
            <div className={style.desc}>{props.desc}</div>
            <div className={style.price}>{props.price}</div>
            <div className={style.clicker}>
                <button className={style.minus} onClick={() => setQuality(quality - 1)}>-</button>
                <div className={style.number}>{quality}</div>
                <button className={style.plus} onClick={() => setQuality(quality + 1)}>+</button>
            </div>
            <button className={style.button} onClick={addProducts}>В КОРЗИНУ</button>
        </div>
    )
}

const Menu = () => {
    let [elem, setElem] = useState([]);
    const changeTab = (e) => {
        const id = e.target.id
        fetch(api[id])
            .then(response => response.json())
            .then(data => setElem(data))
    }
    let count = 0;
    const elements = elem.map(item => {
        count++;
        if (count > 8) return;
        return <Element
            id={item.id}
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
        />
    })
    return (
        <>
            <div>
                <header className={style.header}>
                    <h2 className={style.newsText}>Меню</h2>
                    <button className={style.pizza} onClick={changeTab} id="pizzas">Пицца</button>
                    <button className={style.textBurger} onClick={changeTab} id="burgers">Бургер</button>
                    <button className={style.text} onClick={changeTab} id="sushis">Суши</button>
                    <button className={style.text} onClick={changeTab} id="rolls">Роллы</button>
                    <button className={style.text} onClick={changeTab} id="salads">Салаты</button>
                    <button className={style.text} onClick={changeTab} id="desserts">Десерты</button>
                    <button className={style.text} onClick={changeTab} id="beverages">Напитки</button>
                </header>
                <div className={style.sortMove}>
                    <div className={style.sort}>
                        Сортировка по:
                        <select className={style.sortSelect}>
                            <option value="default">По умолчанию</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={style.pizzas}>
                {elements}
            </div>
        </>
    );
};

export default Menu;