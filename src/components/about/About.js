import React, {useState, useEffect} from 'react';
import style from "./About.module.css";
import api from "../data/api";

const About = () => {
    let [abouts, setAbouts] = useState([]);
    const getData = () => {
        fetch(api.abouts)
            .then(response => response.json())
            .then(data => setAbouts(data))
    }
    useEffect(() => {
        getData();
    }, [])
    const aboutElem = abouts.map(item => {
        return (
            <div className={style.data} key={item.id}>
                <img src={item.img}/>
                <h3 className={style.firstName}>{item.title}</h3>
                <div className={style.desc}>{item.desc}</div>
            </div>
        )
    })
    return (
        <>
            <header className={style.header}>
                <h2 className={style.title}>Почему выбирают нас:</h2>
            </header>
            <div className={style.aboutData}>
                {aboutElem}
            </div>
        </>
    );
};

export default About;