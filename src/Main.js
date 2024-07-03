import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
import styles from './Main.module.css';
import { GiTrophyCup } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
// import { Carousel } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import badu from './img/be.jpg';
import kusadasi from './img/things-to-do-in-Kusadasi-Turkey.jpg';
import batumi from './img/p0fzyy89.jpg';
import guba from './img/images (2).jpeg';
// import badu from './img/be.jpg'








// import Carousel from 'react-bootstrap/Carousel';







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
    // const[people, SetPeople]=useState(false)
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    // const Carousel = () => {
    //     const settings = {
    //       dots: true,
    //       infinite: true,
    //       speed: 500,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 3000,
    //       pauseOnHover: true
    //     }


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
    return (
        <div>
         <section className={styles.first}>
                <div className={styles.menu}>
                   
                
                </div>
                <div className={styles.manu1}>
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
                        <div className={styles.people} onClick={handlePeople}>people count</div>
                        {isCounterVisible && (
                            <div className={styles.counter}>
                                <div >
                                <p>adults


                                </p>
                                <p>over 12 years old</p>
                                </div>

                                <button className={styles.decrement} type="button" onClick={decrement}>-</button>
                                <span className={styles.count}>{count}</span>
                                <button className={styles.increment} type="button" onClick={increment}>+</button>
                         </div>
                                   

                        )}
                        {/* <div className={styles.counter} >

                            
                            <button type="button" onClick={decrement}>-</button>
                            <span>{count}</span>
                            <button type="button" onClick={increment}>+</button>
                            
                        </div> */}
                        <button className={styles.find} type="submit">Find Tickets</button>
                    </form>
                </div>
            </section>
            <section className={styles.choose1} >
                                <h2>WHY BOOK WITH US</h2>

            <section className={styles.choose}>

                {/* <h2>WHY BOOK WITH US</h2> */}
                {/* <div className={styles.price1}>
                <GiTrophyCup />
                </div> */}
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
            <section className={styles.stay}>
           

            </section>
          


            <div className={styles.carouselWrapper}>

            </div>
            <section className={styles.famous}>
                <h1>Famous Locations</h1>
                <select>
                    <option>Baku-Abu-Dabi</option>
                </select>
                <select>
                    <option>Baku-Tblisi</option>
                    <option>Ganja-Tblisi</option>

                </select>  
                <select>
                    <option>Baku-Rim</option>
                </select>  <select>
                    <option>Baku-Istanbul</option>
                    <option>Baku-Izmir</option>
                    <option>Ganja-Istanbul</option>
                    <option>Baku-Ankara</option>

                </select>
                
                 <select>
                    <option>Baku-Moskva</option>
                    <option>Baku-Sank-Peterburg</option>
                    <option>Ganja-Moskva</option>
                    <option>Baku-Kazan</option>

                </select>

            </section>
            {/* <div className="carousel-container">
      <h2>Simple Carousel</h2>
      <Slider {...settings}>
        <div>
          <img src={badu} alt="Slide 1" />
        </div>
        <div>
          <img src={kusadasi} alt="Slide 2" />
        </div>
        <div>
          <img src={batumi} alt="Slide 3" />
        </div>
        <div>
          <img src={guba} alt="Slide 4" />
        </div>
      </Slider>
    </div> */}
        </div>
        
    );
};

export default MainMenu;



