import React, {useEffect, useState} from 'react';
import s from './UpdateProducts.module.css';
import api from "../data/api";
import {useParams} from "react-router-dom";

const UpdateProducts = () => {
    const {catalog_name, id} = useParams();
    const [products, setProducts] = useState({})
    const url = api[catalog_name] + '/' + id;
    const getProductById = () => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                alert('error')
            })
            .then(data => setProducts(data))
    }
    useEffect(() => {
        getProductById();
    }, [])

    const updateProduct = (e) => {
        const data = {
            img: e.currentTarget.img.value,
            title: e.currentTarget.title.value,
            desc: e.currentTarget.desc.value,
            price: e.currentTarget.price.value,
        }
        const options = {
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => {
                if (response.ok){
                    alert('great');
                } else {
                    alert('error');
                }
            })
    }
    return (
        <div className={s.container}>
            <h2>Редактирование товара</h2>
            <form action="javascript:void(0)" onSubmit={updateProduct}>
                <div className={s.form_control}>
                    <div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите ссылку для фото" name="img" defaultValue={products.img}/>
                        </div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите название" name="title" defaultValue={products.title}/>
                        </div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите описание" name="desc" defaultValue={products.desc}/>
                        </div>
                        <div className={s.form_control}>
                            <input type="text" placeholder="Введите цену" name="price" defaultValue={products.price}/>
                        </div>
                    </div>
                    <button typeof="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProducts;