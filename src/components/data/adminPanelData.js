import main from '../data/icons/main.svg';
import orders from '../data/icons/orders.svg';
import menu from '../data/icons/menu.svg';
import contact from '../data/icons/contacts.svg';
import reviews from '../data/icons/reviews.svg';
import employees from '../data/icons/employees.svg';

const data = [
    {
        id: 1,
        img: main,
        text: 'Главная',
        href: 'main'
    },
    {
        id: 2,
        img: orders,
        text: 'Заказы',
        href: 'main'
    },
    {
        id: 3,
        img: menu,
        text: 'Меню',
        href: 'main'
    },
    {
        id: 4,
        img: contact,
        text: 'Контакты',
        href: 'main'
    },
    {
        id: 5,
        img: reviews,
        text: 'Отзывы',
        href: 'reviews'
    },
    {
        id: 6,
        img: employees,
        text: 'Сотрудники',
        href: 'main'
    }
]

export default data;