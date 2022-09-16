import React from 'react';
import s from "./Checkout.module.css";

const Checkout = () => {
    let elem;
    if (sessionStorage.basket){
        let getData = sessionStorage.getItem("basket");
        let data = JSON.parse(getData);
        elem = data.map((item, index) => {
            return (
                <div className={s.elem} key={index}>
                    <img src={item.img} alt=""/>
                    <div>{item.title}</div>
                    <input defaultValue={item.number}/>
                    <div>{item.price}</div>
                </div>
            )
        })
    }
    return (
        <div className={s.checkout}>
            <div>
                <h1 className={s.title}>Оформление заказа</h1>
                <h3>Ваши контактные данные</h3>
                <div className={s.link}>
                    <a href="#">Я новый покупатель</a>
                    <a href="#">Авторизоватся</a>
                </div>
                <form action="#" className={s.formData}>
                    <input type="text" placeholder="Фамилия"/>
                    <input type="text" placeholder="Имя"/>
                    <input type="text" placeholder="Мобильный телефон: 996555555555"/>
                    <input type="text" placeholder="Email"/>
                </form>
                <div>
                    <h3>Ваш заказ</h3>
                    <div className={s.names}>
                        <h5>Продукт</h5>
                        <h5 className={s.quality}>Количество</h5>
                        <h5>Цена</h5>
                    </div>
                    <div>
                        {elem}
                    </div>
                </div>
                <div>
                    <h3>Адрес доставки</h3>
                    <div className={s.address}>
                        <label htmlFor="Pickup"><input type="checkbox" id="Pickup"/>Самовывоз</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Курьерская доставка</label>
                        <select>
                            <option>Выберите страну доставки</option>
                            <option value="kg">Кыргызстан</option>
                            <option value="kz">Казахстан</option>
                            <option value="ru">Россия</option>
                            <option value="am">Армения</option>
                        </select>
                        <input type="text" placeholder="Выберите адрес доставки" className={s.input}/>
                    </div>
                </div>
                <div className={s.movePay}>
                    <h3>Способ оплаты</h3>
                    <div className={s.pay}>
                        <label htmlFor="Pickup"><input type="checkbox" id="Pickup"/>Наличными</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Банковский перевод</label>
                        <label htmlFor="Pickup"><input type="checkbox" id="Pickup"/>Оплата картой, электронными кошельками на сайте</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Денежный перевод</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Оплата курьеру на месте</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;