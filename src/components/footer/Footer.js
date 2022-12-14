import React from 'react';
import style from "./Footer.module.css";
import logo from "../data/images/logo.svg";
import phone from "../data/images/phone.svg";

const Footer = () => {
    return (
        <div className={style.moveHeader}>
            <header className={style.header}>
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
            </header>
        </div>
    );
};

export default Footer;