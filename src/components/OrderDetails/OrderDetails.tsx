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

    // const numberLimitFunction = (value: string) => {
    //     const sanitizedValue = value.replace(/\D/g, "");

    //     if (sanitizedValue.length > 9) {
    //         setErrorMessage("Номер телефона не может быть длиннее 9 цифр.");
    //         setIsPhoneValid(false);
    //     } else if (sanitizedValue.length < 9) {
    //         setErrorMessage("Номер телефона должен содержать максимум 9 цифр.");
    //         setIsPhoneValid(false);
    //     } else {
    //         setErrorMessage("");
    //         setIsPhoneValid(true);
    //     }

    //     setPhone(sanitizedValue);
    // };

    const numberLimitFunction = (value: string) => {
        // Оставляем только цифры
        const sanitizedValue = value.replace(/\D/g, "");

        // Ограничиваем ввод до 9 цифр
        if (sanitizedValue.length > 9) {
            setErrorMessage("Номер телефона не может быть длиннее 9 цифр.");
            setIsPhoneValid(false);
        } else if (sanitizedValue.length < 9) {
            setErrorMessage("Номер телефона должен содержать 9 цифр.");
            setIsPhoneValid(false);
        } else {
            setErrorMessage("");
            setIsPhoneValid(true);
        }

        setPhone(sanitizedValue);
    };

    return (
        <>
            <section id="contact-info" className="form-section">
                <h2>Ваши контактные данные</h2>
                <input type="text" id="first-name" placeholder="Ваше имя" required onChange={(e) => setName(e.target.value)} maxLength={15} />

                {errorMessage && <p style={{ color: 'red', margin: 'auto' }} className="error-message">{errorMessage}</p>}
                <div style={{ display: 'flex' }}>
                    <span style={{ paddingRight: '10px', marginTop: '11px' }}>+996</span>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Ваш номер телефона"
                        required
                        onChange={(e) => numberLimitFunction(e.target.value)}
                        value={inputPhone}
                        maxLength={9} // Ограничиваем количество цифр
                    />
                </div>

                <input style={{ margin: 'auto' }} maxLength={30} type="text" id="address" placeholder="Ваш адрес для доставки" required onChange={(e) => setAddress(e.target.value)} />
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
