import React from 'react';
import style from "./News.module.css";

const News = () => {
    return (
        <div>
            <header className={style.header}>
                <h2 className={style.newsText}>Новинки</h2>
                <div className={style.pizza}>Пицца</div>
                <a className={style.textBurger}>Бургер</a>
                <div className={style.text}>Суши</div>
                <div className={style.text}>Роллы</div>
                <div className={style.text}>Салаты</div>
                <div className={style.text}>Десерты</div>
                <div className={style.text}>Напитки</div>
            </header>
        </div>

    );
};

export default News;