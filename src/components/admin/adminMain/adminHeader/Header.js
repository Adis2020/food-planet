import React from 'react';
import s from './Header.module.css';
import search from '../../../data/icons/search.svg';
import news from '../../../data/icons/new.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.moveMain}>
                <h3 className={s.main}>Главная</h3>
                <img src={search} alt="" className={s.imgSearch}/>
                <img src={news} alt="" className={s.img}/>
                <div className={s.line}></div>
                <h3 className={s.name}>Jones Ferdinand</h3>
            </div>
        </div>
    );
};

export default Header;