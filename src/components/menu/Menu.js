import React from 'react';
import style from "./Menu.module.css";

const Menu = () => {
    return (
        <div>
            <header className={style.header}>
                <h2 className={style.menuText}>Меню</h2>
                <div className={style.pizza}>Пицца</div>
                <a className={style.textBurger}>Бургер</a>
                <div className={style.text}>Суши</div>
                <div className={style.text}>Роллы</div>
                <div className={style.text}>Салаты</div>
                <div className={style.text}>Десерты</div>
                <div className={style.text}>Напитки</div>
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

    );
};

export default Menu;