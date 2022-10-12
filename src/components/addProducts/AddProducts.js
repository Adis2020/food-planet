import React from 'react';
import s from './AddProducts.module.css';
import api from '../data/api';
import {toast} from "react-hot-toast";

const AddProducts = () => {
    const saveData = (e) => {
        const data = {
            img: e.currentTarget.img.value,
            title: e.currentTarget.title.value,
            desc: e.currentTarget.desc.value,
            price: e.currentTarget.price.value,
            catalog: e.currentTarget.catalog.value,
        }
        const catalog = e.currentTarget.catalog.value;
        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(api[catalog], options)
            .then(response => {
                if (response.status === 201){
                   toast.success('Продукт лобавлен')
                } else {
                    toast.error('Ошибка')
                }
            })
    }
    return (
        <div className={s.container}>
            <h2>Добавление товара</h2>
            <form action="javascript:void(0)" onSubmit={saveData}>
                <div className={s.form_control}>
                    <div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите ссылку для фото" name="img"/>
                        </div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите название" name="title"/>
                        </div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите описание" name="desc"/>
                        </div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите цену" name="price"/>
                        </div>
                        <div className={s.form_control}>
                            <select name="catalog">
                                <option value="0">Выберите продукцию</option>
                                <option value="pizzas">Пицца</option>
                                <option value="burgers">Бургеры</option>
                                <option value="salads">Салат</option>
                                <option value="desserts">Десерт</option>
                                <option value="beverages">Напитки</option>
                                <option value="rolls">Роллы</option>
                                <option value="sushis">Суши</option>
                            </select>
                        </div>
                    </div>
                    <button typeof="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;