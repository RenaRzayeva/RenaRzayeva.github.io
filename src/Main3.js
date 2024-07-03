import React, { useState, useEffect } from 'react';
import styles from './Main3.module.css';
import { GiTrophyCup } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import badu from './img/be.jpg'
import kusadasi from './img/things-to-do-in-Kusadasi-Turkey.jpg'
import batumi from './img/p0fzyy89.jpg'
import guba from './img/images (2).jpeg'
import { HiChevronDoubleDown } from "react-icons/hi2";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const MainMenu = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    const [countries, setCountries] = useState([]);
    const [countryOne, setCountryOne] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCountryOne, setSelectedCountryOne] = useState('');
    const [count, setCount] = useState(0);
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const [select, setSelect] = useState(false);
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);

    useEffect(() => {
        fetch('https://api.first.org/data/v1/countries')
            .then(res => res.json())
            .then(data => {
                const countryList = Object.keys(data.data).map(key => data.data[key].country);
                setCountries(countryList);
                setCountryOne(countryList);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    const handleCountryChange = (e) => setSelectedCountry(e.target.value);
    const handleCountryOneChange = (e) => setSelectedCountryOne(e.target.value);
    const handlePeople = () => setIsCounterVisible(!isCounterVisible);
    const handlePeoples = () => setSelect(!select);
    const handlePeoples1 = () => setSelect1(!select1);
    const handlePeoples2 = () => setSelect2(!select2);
    const handlePeoples3 = () => setSelect3(!select3);

    return (
        <div>
            <div className={styles.first}>
                <p>Search hundreds of flight sites at once.</p>
                <form className={styles.countryName}>
                    <select className={styles.selectCountry} value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    <select className={styles.selectCountry1} value={selectedCountryOne} onChange={handleCountryOneChange}>
                        <option value="">Select a country</option>
                        {countryOne.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    <input className={styles.date} type="date" />
                    <input className={styles.date1} type="date" />
                    <div className={styles.people} onClick={handlePeople}>
                        {count > 0 ? `${count} people` : 'people count'}
                    </div>
                    {isCounterVisible && (
                        <div className={styles.counter}>
                            <div>
                                <p>adults</p>
                                <p>over 12 years old</p>
                            </div>
                            <button className={styles.decrement} type="button" onClick={decrement}>-</button>
                            <span className={styles.count}>{count}</span>
                            <button className={styles.increment} type="button" onClick={increment}>+</button>
                        </div>
                    )}
                    <button className={styles.find} type="submit">Find Tickets</button>
                </form>
            </div>
            <section className={styles.choose1}>
                <h2>WHY BOOK WITH US</h2>
                <section className={styles.choose}>
                    <div className={styles.price}>
                        <div className={styles.price3}>
                            <GiTrophyCup />
                        </div>
                        <h3>BEST PRICE GUARANTEE</h3>
                        <p>Find our lowest price to destinations worldwide </p>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.price1}>
                            <IoTicketSharp />
                        </div>
                        <h3>EASY BOOKING</h3>
                        <p>Find our lowest price to destinations worldwide </p>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.price2}>
                            <IoMdChatbubbles />
                        </div>
                        <h3>EASY BOOKING</h3>
                        <p>Find our lowest price to destinations worldwide </p>
                    </div>
                </section>
            </section>
            {/* <div className={styles.carouselWrapper}>
                <Slider {...settings}>
                    <div>
                        <img src={badu} alt="badu" />
                    </div>
                    <div>
                        <img src={kusadasi} alt="kusadasi" />
                    </div>
                    <div>
                        <img src={batumi} alt="batumi" />
                    </div>
                    <div>
                        <img src={guba} alt="guba" />
                    </div>
                </Slider>
            </div> */}
            <h1 className={styles.popular}>Popular destinations</h1>
            <section className={styles.famous}>
                <button className={styles.famous1} onClick={handlePeoples}>
                    Georgia <HiChevronDoubleDown />
                </button>
                {select && (
                    <p className={styles.famousOne}>Baku-Tblisi</p>
                )}
                <button className={styles.famous1} onClick={handlePeoples1}>
                    Italy <HiChevronDoubleDown />
                </button>
                {select1 && (
                    <p className={styles.famousTwo}>Baku-Rim</p>
                )}
                <button className={styles.famous1} onClick={handlePeoples2}>
                    Russia <HiChevronDoubleDown />
                </button>
                {select2 && (
                    <div className={styles.famousThree}>
                        <p>Baku-Moskow</p>
                        <p>Baku-Saint-Petersburg</p>
                        <p>Lenkoran-Moskow</p>
                    </div>
                )}
                <button className={styles.famous1} onClick={handlePeoples3}>
                    Turkish <HiChevronDoubleDown />
                </button>
                {select3 && (
                    <div className={styles.famousFour}>
                        <p>Istanbul-Baku</p>
                        <p>Baku-Izmir</p>
                        <p>Lenkoran-Ankara</p>
                        <p>Baku-Ankara</p>
                    </div>
                )}
            </section>
            <section className={styles.end1}>
                <div className={styles.end}>
                    <div>
                        <h3>Support</h3>
                        <p>Coronavirus (COVID-19) FAQs</p>
                        <p>Manage your trips</p>
                        <p>Attractions help center</p>
                        <p>Safety Resource Center</p>
                    </div>
                    <div>
                        <h3>Discover</h3>
                        <p> Genius loyalty program</p>
                        <p>Seasonal and holiday deals</p>
                        <p>Travel articles</p>
                        <p>Booking.com for Business</p>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p>56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA</p>
                        <p>012-6532-568-9746</p>
                        <p>012-6532-568-97468</p>
                    </div>
                </div>
                <p className={styles.book}>
                    Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
                    Copyright © 1996–2024 Booking.com™. All rights reserved.
                </p>
                <div className={styles.icons}>
                    <AiFillFacebook />
                    <FaInstagram />
                    <FaTwitterSquare />
                </div>
            </section>
        </div>
    );
};

export default MainMenu;
