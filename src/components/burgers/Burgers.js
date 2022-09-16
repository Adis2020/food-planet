import React, {useState} from 'react';
import style from "./Burgers.module.css";
import burgerData from ".././data/burgerData";

let data = [];

const BurgerElem = (props) => {
    let [quality, setQuality] = useState(1);
    const setDataBurger = () => {
        let img = props.img;
        let title = props.title;
        let price = props.price;
        let number = quality;
        const dataBurger = {
            img: img,
            title: title,
            price: price,
            number: number,
        }
        data.push(dataBurger)
        sessionStorage.setItem("burger", JSON.stringify(data));
    }
    return (
        <div className={style.burger}>
            <img src={props.img}/>
            <div className={style.mainText}>{props.title}</div>
            <div className={style.desc}>{props.desc}</div>
            <div className={style.price}>{props.price}</div>
            <div className={style.clicker}>
                <button className={style.minus} onClick={() => setQuality(quality - 1)}>-</button>
                <div className={style.number}>{quality}</div>
                <button className={style.plus} onClick={() => setQuality(quality + 1)}>+</button>
            </div>
            <button className={style.button} onClick={setDataBurger}>В КОРЗИНУ</button>
        </div>
    )
}

const Burgers = () => {
    const elem = burgerData.map((item, index) => {
        return (
            <BurgerElem
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
            />
        )
    })
    return (
        <div className={style.burgers}>
            {elem}
        </div>
    )
}

export default Burgers;