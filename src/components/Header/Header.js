import React from 'react';
import style from "./Header.module.css";
import logo from "./images/logo.svg";
import phone from "./images/phone.svg";
import basket from "./images/basket.svg";

const Header = () => {
    return (
        <header>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
                <div className={style.moveText}>
                    <h1 className={style.logoFirstText}>FOOD PLANET</h1>
                    <div className={style.logoLastText}>Планета вкусной еды</div>
                </div>
            </div>
            <div className={style.main}>Главная</div>
            <select className={style.menu}>
                <option>Меню</option>
            </select>
            <div className={style.text}>Доставка</div>
            <div className={style.text}>Контакты</div>
            <div className={style.textPhone}>
                <img src={phone} alt="phone"/>
                +996500405988
            </div>
            <div className={style.basket}>
                <img src={basket} alt="phone"/>
                1
            </div>
        </header>
    );
};

export default Header;