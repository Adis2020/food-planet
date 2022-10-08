import React, {useState} from 'react';
import style from './News.module.css';
import api from '../data/api';
import Element from '../elements/Elements';

const News = () => {
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
        if (count > 4) return;
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
                    <h2 className={style.newsText}>Новинки</h2>
                    <button className={style.pizza} onClick={changeTab} id="pizzas">Пицца</button>
                    <button className={style.textBurger} onClick={changeTab} id="burgers">Бургер</button>
                    <button className={style.text} onClick={changeTab} id="sushis">Суши</button>
                    <button className={style.text} onClick={changeTab} id="rolls">Роллы</button>
                    <button className={style.text} onClick={changeTab} id="salads">Салаты</button>
                    <button className={style.text} onClick={changeTab} id="desserts">Десерты</button>
                    <button className={style.text} onClick={changeTab} id="beverages">Напитки</button>
                </header>
            </div>
            <div className={style.burgers}>
                {elements}
            </div>
        </>
    );
};

export default News;