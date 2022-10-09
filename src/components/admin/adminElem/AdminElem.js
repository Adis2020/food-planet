import React, {useEffect, useState} from 'react';
import s from './AdminElem.module.css';
import {useParams, Link} from "react-router-dom";
import api from "../../data/api";

const Elem = () => {
    const params = useParams();
    let [elem, setElem] = useState([]);
    const getElement = () => {
        fetch(api[params.element_name])
            .then(response => response.json())
            .then(data => setElem(data))
    }
    useEffect(() => {
        getElement();
    }, [])
    const deleteProduct = (id) => {
        const url = api[params.element_name] + '/' + id;
        const options = {
            method: 'DELETE'
        }
        fetch(url, options)
            .then(response => {
                if (response.status === 200){
                    getElement()
                }
            })
    }
    const getLink = (id) => '../../updateProducts/' + params.element_name + '/' + id;
    return elem.map(item => {
        return (
            <div className={s.elem} key={item.id} id={item.id}>
                <img src={item.img} alt="Изображение"/>
                <h3 className={s.title}>{item.title}</h3>
                <h4 className={s.desc}>{item.desc}</h4>
                <h4>Цена: {item.price}</h4>
                <button className={s.buttonDelete} onClick={() => {deleteProduct(item.id)}}>Удалить</button>
                <Link to={getLink(item.id)}><button className={s.buttonEdit}>Редактировать</button></Link>
            </div>
        )
    })
}

const AdminElem = () => {
    return (
        <div className={s.elems}>
            <Elem/>
        </div>
    );
};

export default AdminElem;