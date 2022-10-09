import React, {useEffect, useState} from 'react';
import s from './News.module.css';
import api from '../data/api';
import Element from '../newElements/NewElements';

const News = () => {
    const [elem, setElem] = useState([]);
    const changeTab = (e) => {
        const id = e.target.id
        fetch(api[id])
            .then(response => response.json())
            .then(data => setElem(data))
    }
    const getElement = () => {
        let count = 0;
        return elem.map(item => {
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
    }
    const elements = getElement();
    useEffect(() => {
        if (elem.length >= 0){
            fetch(api.burgers)
                .then(response => response.json())
                .then(data => setElem(data))
        }
    }, [])
    return (
        <>
            <div>
                <header className={s.header}>
                    <h2 className={s.newsText}>Новинки</h2>
                    <button className={s.text} onClick={changeTab} id="pizzas">Пицца</button>
                    <button className={s.text} onClick={changeTab} id="burgers">Бургер</button>
                    <button className={s.text} onClick={changeTab} id="sushis">Суши</button>
                    <button className={s.text} onClick={changeTab} id="rolls">Роллы</button>
                    <button className={s.text} onClick={changeTab} id="salads">Салаты</button>
                    <button className={s.text} onClick={changeTab} id="desserts">Десерты</button>
                    <button className={s.text} onClick={changeTab} id="beverages">Напитки</button>
                </header>
            </div>
            <div className={s.burgers}>
                {elements}
            </div>
        </>
    );
};

export default News;