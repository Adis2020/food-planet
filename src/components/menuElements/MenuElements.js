import React, {useState} from 'react';
import productManager from '../../manager/product.manager';
import s from './MenuElements.module.css';

const MenuElements = (props) => {
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
        <div className={s.elem} key={props.id}>
            <img src={props.img}/>
            <div className={s.mainText}>{props.title}</div>
            <div className={s.desc}>{props.desc}</div>
            <div className={s.price}>{props.price}</div>
            <div className={s.clicker}>
                <button className={s.minus} onClick={() => setQuality(quality - 1)}>-</button>
                <div className={s.number}>{quality}</div>
                <button className={s.plus} onClick={() => setQuality(quality + 1)}>+</button>
            </div>
            <button className={s.button} onClick={addProducts}>В КОРЗИНУ</button>
        </div>
    )
}

export default MenuElements;