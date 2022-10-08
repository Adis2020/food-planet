import React from 'react';
import s from './NotFound.module.css';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={s.notFound}>
            <h1>404</h1>
            <Link to="/" className={s.link}>Вернутся на главную страницу</Link>
        </div>
    );
};

export default NotFound;