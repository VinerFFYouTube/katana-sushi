import { useState } from "react";
import Menu from "../Menu/Menu";
import reklama1 from '../../assets/images/reklama/reklama1.png'
import reklama2 from '../../assets/images/reklama/reklama2.png'
import reklama3 from '../../assets/images/reklama/reklama3.png'


const OrderDetails = () => {
    const [inputName, setName] = useState('');
    const [inputPhone, setPhone] = useState('');
    const [inputAddress, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const numberLimitFunction = (value: string) => {
        const sanitizedValue = value.replace(/\D/g, "");

        if (sanitizedValue.length > 12) {
            setErrorMessage("Номер телефона не может быть длиннее 12 цифр.");
            setIsPhoneValid(false);
        } else if (sanitizedValue.length < 9) {
            setErrorMessage("Номер телефона должен содержать минимум 9 цифр.");
            setIsPhoneValid(false);
        } else {
            setErrorMessage("");
            setIsPhoneValid(true);
        }

        setPhone(sanitizedValue);
    };
    return (
        <>
            <header>
                <h1>онлайн меню KATANA SUSHI</h1>
            </header>

            <section id="contact-info" className="form-section">
                <h2>Ваши контактные данные</h2>
                <input maxLength={15} type="text" id="first-name" placeholder="Ваше имя" required onChange={(e) => setName(e.target.value)} />
                {errorMessage && <p style={{ color: 'red' }} className="error-message">{errorMessage}</p>}
                <input type="number" id="phone" placeholder="Ваш номер телефона" required onChange={(e) => numberLimitFunction(e.target.value)} />
                <input maxLength={30} type="text" id="address" placeholder="Ваш адрес для доставки" required onChange={(e) => setAddress(e.target.value)} />
            </section>
            {/* рекламный баннер */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={reklama1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={reklama2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={reklama3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Menu names={inputName} phones={inputPhone} addres={inputAddress} isPhoneValid={isPhoneValid} />
        </>
    );
};

export default OrderDetails;
