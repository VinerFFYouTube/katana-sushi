import { useState } from "react";
import { menuObj } from "../Menu/Menu";
import './Header.css'

const Header = () => {

    const dishes = menuObj.map(dishs => dishs.name)

    const [query, setQuery] = useState('');
    const filterDishes = dishes.filter(dish => dish.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <header>
                <h1>онлайн меню KATANA SUSHI</h1>
                <input type="text" placeholder="поиск блюда" onChange={e => setQuery(e.target.value)} value={query} />
                {query.length > 0 &&
                    <ul className="form-section">
                        {filterDishes.map((dish, index) => (
                            <li key={index} className="input-result-li">
                                <a className="click-input-dish" href={`#${dish}`} onClick={() => { setQuery('') }}>{dish}</a>
                            </li>
                        ))}
                    </ul>
                }
            </header>
        </>
    )
}

export default Header;