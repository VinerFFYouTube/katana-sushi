import { useState } from "react";
import setDaurma from "../../assets/images/menu/setDaurma.jpg";
import setNew from "../../assets/images/menu/setNew.jpg";
import newSetAndPizzaChili from "../../assets/images/menu/newSetAndPizzaChili.jpg";
import setHot from "../../assets/images/menu/setHot.jpg";
import warmSet from "../../assets/images/menu/warmSet.jpg";
import setHoliday from "../../assets/images/menu/setHoliday.jpg";
import setDoubleHit from "../../assets/images/menu/setDoubleHit.jpg";
import setEiforia from "../../assets/images/menu/setEiforia.jpg";
import setTanoshumi from "../../assets/images/menu/setTanoshumi.jpg";
import setZapenchonnui from "../../assets/images/menu/setZapenchonnui.jpg";
import setTakudze from "../../assets/images/menu/setTakudze.jpg";
import setXxl from "../../assets/images/menu/setXxl.jpg";
import setFirmennui from "../../assets/images/menu/setFirmennui.jpg";
import strips from "../../assets/images/menu/strips.jpg";
import free from "../../assets/images/menu/free.jpg";
import margarita from "../../assets/images/menu/margarita.jpg";
import krevetkiAndLosos from "../../assets/images/menu/krevetkiAndLosos.jpg";
import pepperoni from "../../assets/images/menu/pepperoni.jpg";
import grushaAndGorgonzolla from "../../assets/images/menu/grushaAndGorgonzolla.jpg";
import chickenBarbeky from "../../assets/images/menu/chickenBarbeky.jpg";
import foCheeses from "../../assets/images/menu/foCheeses.jpg";
import chickenAndMushrooms from "../../assets/images/menu/chickenAndMushrooms.jpg";
import chiliMeet from "../../assets/images/menu/chiliMeet.jpg";
import chedderTataki from "../../assets/images/menu/chedderTataki.jpg";
import chippo from "../../assets/images/menu/chippo.jpg";
import dragon from "../../assets/images/menu/dragon.jpg";
import filla from "../../assets/images/menu/filla.jpg";
import bonitoFiladelfia from "../../assets/images/menu/bonitoFiladelfia.jpg";
import kaliforniaAndLosos from "../../assets/images/menu/kaliforniaAndLosos.jpg";
import dragonLite from "../../assets/images/menu/dragonLite.jpg";
import fillaLite from "../../assets/images/menu/fillaLite.jpg";
import busido from "../../assets/images/menu/busido.jpg";
import vulkan from "../../assets/images/menu/vulkan.jpg";
import subo from "../../assets/images/menu/subo.jpg";
import tempuraLosos from "../../assets/images/menu/tempuraLosos.jpg";
import kenchoMaki from "../../assets/images/menu/kenchoMaki.jpg";
import sayakeHoto from "../../assets/images/menu/sayakeHoto.jpg";
import zapechonnyiKalifornya from "../../assets/images/menu/zapechonnyiKalifornya.jpg";
import zapechonnyiKalifornyaOstryi from "../../assets/images/menu/zapechonnyiKalifornyaOstryi.jpg";
import yakiSpaicOstryi from "../../assets/images/menu/yakiSpaicOstryi.jpg";
import yakiKrab from "../../assets/images/menu/yakiKrab.jpg";
import morse from "../../assets/images/menu/morse.jpg";
import subo1 from "../../assets/images/menu/subo1.jpg";

import PaymentMethod from "../PaymentMethod/PaymentMethod";
import "./Menu.css"; // Подключаем кастомные стили
export const menuObj = [
    { name: "Сет дарума", price: 600, image: setDaurma, category: 'сеты' },
    { name: "Сет дарума с пиццой пепперони", price: 990, image: setNew, category: 'сеты' },
    { name: "Нью сет", price: 600, image: newSetAndPizzaChili, category: 'сеты' },
    { name: "Нью сет с пиццой чилли", price: 990, image: setHot, category: 'сеты' },
    { name: "Сет горячий", price: 650, image: warmSet, category: 'сеты' },
    { name: "Тёплый сет", price: 690, image: setHoliday, category: 'сеты' },
    { name: "Сет Холидей", price: 1200, image: setDoubleHit, category: 'сеты' },
    { name: "Сет дабл хит", price: 800, image: setEiforia, category: 'сеты' },
    { name: "Сет эйфория", price: 1200, image: setTanoshumi, category: 'сеты' },
    { name: "Сет таношуми", price: 1200, image: setZapenchonnui, category: 'сеты' },
    { name: "Сет запечённый", price: 1300, image: setTakudze, category: 'сеты' },
    { name: "Сет такудзе", price: 800, image: setXxl, category: 'сеты' },
    { name: "Сет ххл", price: 1580, image: setFirmennui, category: 'сеты' },
    { name: "Сет фирменный", price: 1590, image: strips, category: 'фри и стрипсы' },
    { name: "Стрипсы", price: 180, image: free, category: 'фри и стрипсы' },
    { name: "Фри", price: 100, image: margarita, category: 'фри и стрипсы' },
    { name: "Маргарита", price: 300, image: krevetkiAndLosos, category: 'пиццы' },
    { name: "Креветки и лосось", price: 500, image: pepperoni, category: 'пиццы' },
    { name: "Пепперони", price: 350, image: grushaAndGorgonzolla, category: 'пиццы' },
    { name: "Груша и горгонзола", price: 350, image: chickenBarbeky, category: 'пиццы' },
    { name: "Чиккен барбекю", price: 350, image: foCheeses, category: 'пиццы' },
    { name: "Четыре сыра", price: 350, image: chickenAndMushrooms, category: 'пиццы' },
    { name: "Курица и грибы", price: 350, image: chiliMeet, category: 'пиццы' },
    { name: "Чили мясная", price: 400, image: chedderTataki, category: 'пиццы' },
    { name: "Чеддер татаки", price: 250, image: chippo, category: 'суши' },
    { name: "Чипо", price: 250, image: dragon, category: 'суши' },
    { name: "Дракон", price: 400, image: filla, category: 'суши' },
    { name: "Фила", price: 400, image: bonitoFiladelfia, category: 'суши' },
    { name: "Бонито филадельфия", price: 300, image: kaliforniaAndLosos, category: 'суши' },
    { name: "Калифорния с лососем", price: 300, image: dragonLite, category: 'суши' },
    { name: "Дракон лайт", price: 250, image: fillaLite, category: 'суши' },
    { name: "Фила лайт", price: 250, image: busido, category: 'суши' },
    { name: "Бусидо", price: 450, image: vulkan, category: 'суши' },
    { name: "Вулкан", price: 300, image: subo, category: 'суши' },
    { name: "Субо", price: 300, image: subo1, category: 'суши' },
    { name: "Жусто", price: 300, image: tempuraLosos, category: 'суши' },
    { name: "Темпура лосось", price: 250, image: kenchoMaki, category: 'суши' },
    { name: "Кенчо маки", price: 250, image: sayakeHoto, category: 'суши' },
    { name: "Сяке хото", price: 250, image: zapechonnyiKalifornya, category: 'суши' },
    { name: "Запечённый Калифорния", price: 250, image: zapechonnyiKalifornyaOstryi, category: 'суши' },
    { name: "Запечённый Калифорния острый", price: 250, image: yakiSpaicOstryi, category: 'суши' },
    { name: "яки спайс острый", price: 250, image: yakiKrab, category: 'суши' },
    { name: "Яки краб", price: 250, image: yakiKrab, category: 'суши' },
    { name: "Морс", price: 100, image: morse, category: 'напитки' },
];

type Menus = {
    name: string;
    price: number;
    quantity: number;
}

type Users = {
    names: string;
    phones: string;
    addres: string;
    isPhoneValid: boolean;
}

const Menu = ({ names, phones, addres, isPhoneValid }: Users) => {
    const [menu, setMenu] = useState<Menus[]>([]);

    let allPrice: number = 0;
    menu.forEach((prices) => {
        allPrice += prices.price * prices.quantity;
    });

    const addToMenu = (name: string, price: number, quantity: number) => {
        const existingDishIndex = menu.findIndex((dish) => dish.name === name);
        if (existingDishIndex !== -1) {
            // Если блюдо уже есть в меню, увеличиваем его количество
            const updatedMenu = [...menu];
            updatedMenu[existingDishIndex].quantity += quantity;
            setMenu(updatedMenu);
        } else {
            // Если блюда нет, добавляем его в меню
            const newMenu = [...menu, { name, price, quantity }];
            setMenu(newMenu);
        }

        // menu.findIndex((dish) => dish.name === name):
        // Ищем индекс блюда в массиве menu по имени.
        // Если блюдо найдено, метод возвращает его индекс.Если не найдено, возвращается - 1.
        // Если блюдо найдено(existingDishIndex !== -1):
        // Создаем копию массива menu и увеличиваем количество(quantity) у найденного блюда.
        // Если блюдо не найдено:
        // Создаем новый массив, добавляя объект блюда.
    };

    const deleteToMenu = (name: string) => {
        const deleteMenu = menu.findIndex((dish) => dish.name === name)
        const updatedMenu = [...menu];
        updatedMenu.splice(deleteMenu, 1)
        setMenu(updatedMenu)
    }

    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };


    return (
        <>
            <div className="burger_menu">
                <button className="btn_burger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* категории */}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><button className="dropdown-item active" onClick={() => handleCategoryChange("фри и стрипсы")}>фри и стрипсы</button></li>
                    <li><button className="dropdown-item" onClick={() => handleCategoryChange("сеты")}>сеты</button></li>
                    <li><button className="dropdown-item" onClick={() => handleCategoryChange("пиццы")}>пиццы</button></li>
                    <li><button className="dropdown-item" onClick={() => handleCategoryChange("суши")}>суши</button></li>
                    <li><button className="dropdown-item" onClick={() => handleCategoryChange("напитки")}>напитки</button></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={() => handleCategoryChange("")}>Все</button></li>
                </ul>
            </div >

            <section id="menu-items" className="menu-section">
                <div className="menu-container">
                    {menuObj
                        .filter(dish => selectedCategory === "" || dish.category === selectedCategory)
                        .map((dish, index) => (
                            <div key={`${dish.name}-${index}`} id={dish.name} className="menu-item">
                                <div className="menu-item-info">
                                    <img src={dish.image} alt={dish.name} className="menu-item-image" />
                                    <div>
                                        <h3 className="menu-item-name">{dish.name}</h3>
                                        <p className="menu-item-price">Цена: {dish.price} сом</p>
                                    </div>
                                </div>

                                <div className="menu-item-details">
                                    <input type="number" id={`quantity${index}`} defaultValue="1" min="1" className="quantity-input" />
                                    <label htmlFor={`quantity${index}`}>укажите количество</label>
                                    <button className="add-btn"
                                        onClick={() => {
                                            const quantity = document.getElementById(`quantity${index}`) as HTMLInputElement;
                                            addToMenu(dish.name, dish.price, parseInt(quantity.value, 10));
                                        }}>
                                        Добавить в заказ
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            <section id="order-summary" className="order-summary">
                <h2>Ваш заказ</h2>
                <ul id="order-list">
                    {menu.map((item, index) => (
                        <div key={`${item.name}-${index}`}>
                            <li className="order-item">
                                <span>{item.name}: {item.quantity} - {item.price * item.quantity}</span>
                                <strong className="delete-span" onClick={() => deleteToMenu(item.name)}>удалить</strong>
                            </li>
                            <hr />

                        </div>
                    ))}
                </ul>
                <p>Итоговая сумма: <span id="total-price">{allPrice}</span> сом</p>
            </section>

            <PaymentMethod
                allPrices={allPrice}
                userName={names}
                userNumber={phones}
                userAddres={addres}
                wholeOrder={menu}
                isPhoneValid={isPhoneValid}
                menuLength={menu.length}
            />
        </>
    );
};

export default Menu;
