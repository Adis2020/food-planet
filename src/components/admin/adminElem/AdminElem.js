import React from 'react';
import s from './AdminElem.module.css';
import {useParams} from "react-router-dom";
import api from "../../data/api";
import burgerData from '../../data/adminBurgerData';
import pizzaData from '../../data/adminPizzaData';
import sushiData from '../../data/adminSushiData';
import desertData from '../../data/adminDessertsData';
import drinkData from '../../data/adminDrinksData';
import saladData from '../../data/adminSaladsData';
import rollData from '../../data/adminRollData';

const Elem = () => {
    const params = useParams();
    console.log(params)

    if (params.element_name === 'elements') {
        return burgerData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    } else if (params.element_name === 'pizzas') {
        return pizzaData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    } else if (params.element_name === 'sushis') {
        return sushiData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    } else if (params.element_name === 'deserts') {
        return desertData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    } else if (params.element_name === 'drinks') {
        return drinkData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    } else if (params.element_name === 'salats') {
        return saladData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    } else if (params.element_name === 'rolls') {
        return rollData.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt="Изображение"/>
                    <h3 className={s.title}>{item.title}</h3>
                    <h4>{item.desc}</h4>
                    <h4>Цена: {item.price}</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            )
        })
    }
}

const AdminElem = () => {
    return (
        <div className={s.elems}>
            <Elem/>
        </div>
    );
};

export default AdminElem;