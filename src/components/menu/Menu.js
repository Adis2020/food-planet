import React, {useEffect, useState} from 'react';
import s from './Menu.module.css';
import api from '../data/api';
import MenuElements from '../menuElements/MenuElements';

const Menu = () => {
    let [elem, setElem] = useState([]);
    const changeTab = (e) => {
        const id = e.target.id
        fetch(api[id])
            .then(response => response.json())
            .then(data => setElem(data))
    }
    useEffect(() => {
        if (elem.length >= 0){
            fetch(api.pizzas)
                .then(response => response.json())
                .then(data => setElem(data))
        }
    }, [])
    let count = 0;
    const elements = elem.map(item => {
        count++;
        if (count > 8) return;
        return <MenuElements
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
                <header className={s.header}>
                    <h2 className={s.newsText}>Меню</h2>
                    <button className={s.text} onClick={changeTab} id="pizzas">Пицца</button>
                    <button className={s.text} onClick={changeTab} id="burgers">Бургер</button>
                    <button className={s.text} onClick={changeTab} id="sushis">Суши</button>
                    <button className={s.text} onClick={changeTab} id="rolls">Роллы</button>
                    <button className={s.text} onClick={changeTab} id="salads">Салаты</button>
                    <button className={s.text} onClick={changeTab} id="desserts">Десерты</button>
                    <button className={s.text} onClick={changeTab} id="beverages">Напитки</button>
                </header>
                <div className={s.sortMove}>
                    <div className={s.sort}>
                        Сортировка по:
                        <select className={s.sortSelect}>
                            <option value="default">По умолчанию</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={s.pizzas}>
                {elements}
            </div>
            <div className={s.moveButtonMore}>
                <button className={s.buttonMore}>Показать ещё</button>
            </div>
        </>
    );
};

export default Menu;