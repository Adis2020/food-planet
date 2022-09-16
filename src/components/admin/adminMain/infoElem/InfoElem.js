import React from 'react';
import s from './InfoElem.module.css';
import data from "../../../data/infoElemData";
import {Link} from "react-router-dom";

const Elem = () => {
    return data.map((item) => {
        return (
            <Link to={item.href} className={s.box} key={item.id}>
                <h3>{item.title}</h3>
                <div>{item.count}</div>
            </Link>
        )
    })
}

const InfoElem = () => {
    return (
        <div className={s.boxes}>
            <Elem/>
        </div>
    );
};

export default InfoElem;