import React, {useState} from "react";
import productManager from "../../manager/product.manager";
import style from './NewElements.module.css';

const NewElements = (props) => {
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

export default NewElements;