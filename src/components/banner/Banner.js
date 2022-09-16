import React from 'react';
import style from "./Banner.module.css";
import arrow from ".././data/images/arrow.svg";
import burger from ".././data/images/burger.png";

const Banner = () => {
    return (
        <div className={style.move}>
            <div>
                <h2 className={style.mainText}>
                    Доставка вкусной еды <br/>
                    до 30 минут + напиток <br/>
                    в подарок!
                </h2>
                <div className={style.lastName}>
                    Доставим заказ вовремя и можете рассчитывать, что <br/>
                    еда будет доставлен всегда горячим и ароматным.
                </div>
                <button className={style.button}>Перейти в меню<img src={arrow}/></button>
                <img src={burger} alt="Burger" className={style.burger}/>
            </div>
        </div>
    );
};

export default Banner;