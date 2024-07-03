import React from 'react'
import styles from './Stay.module.css'
import  { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image5 from "./components/images (3).jpeg"
import image6 from "./components/images (4).jpeg"
import image7 from "./components/images (5).jpeg"
import image8 from "./components/images (6).jpeg"
import image9 from "./uniques/images (10).jpeg"
import image10 from "./uniques/images (9).jpeg"
import image11 from "./uniques/images (8).jpeg"
import image12 from "./uniques/images (7).jpeg"
import image13 from './img/gettyimages-1973662879.jpg'
import image14 from './img/getty_639000942_327641.jpg'
import image15 from './img/Landscape-of-Qibao-Old-Town-in-Shanghai-China.webp'

import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import imageOne from './img/otdihvsentyabre.jpg'


import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// const images = [
//   './components/a697_ho_00_p_1024x768.jpg',
//   './components/luxury-hot-tub-indoor-with-beautiful-winter-landscape-view-night_820340-18649.avif'
//   ,'./img/images (3).jpeg'];

import image1 from './img/images (2).jpeg'
import image2 from './img/images (4).jpeg'
import image3 from './img/images (3).jpeg'
import image4 from './img/dubai-general-marina-article.jpg'
function Stayses(){
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const [spanValue, setSpanValue] = useState('');
  const values = ['destination', 'adventure', 'vacation spot', 'place to visit']; // Массив с возможными значениями
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [countryOne, setCountryOne] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = values[Math.floor(Math.random() * values.length)];
      setSpanValue(randomValue);
    }, 3000); // Обновление значения каждые 3 секунды
    fetch('https://api.first.org/data/v1/countries')
    .then(res => res.json())
    .then(data => {
        const countryList = Object.keys(data.data).map(key => data.data[key].country);
        setCountries(countryList);
        setCountryOne(countryList);
    })
    .catch(error => console.error('Error fetching countries:', error));


    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);
  const handleCountryChange = (e) => setSelectedCountry(e.target.value);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const handlePeople = () => setIsCounterVisible(!isCounterVisible);

    

  return (
    <div>
    <div className={styles.find}>
        <h1>Find your next stay
</h1>
<p>Search deals on hotels, homes, and much more...

</p>
<form>
<select className={styles.selectCountry} value={selectedCountry} onChange={handleCountryChange}>
                            <option value="">Select a country</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        
</form>
</div>


       <div className={styles.offer}>
      <h2>Offers</h2>
      <p className={styles.special}>Promotions, deals, and special offers for you
</p>
<div className={styles.explore}>
<div className={styles.deals}>
  <div className={styles.summer}>
<h3> Planning a trip to the 2024 Summer Games?</h3>
  <p>
Brussels is a quick train ride from all the action</p>
<button>Explore Brussels</button>
</div>

<img src={imageOne} alt='image'/>

</div>
<div className={styles.moment}>

<div >
  {/* <h3>Seize the moment!
</h3> */}
<p>Seize the moment!</p>
  <p>Save 15% or more when you book and stay before October 1, 2024</p>
</div>
</div>
      </div>
    </div>
      <div className={styles.hotel}>
        <h1>Browse by property type
</h1>
<div className={styles.images}>
      <div className={styles.browse}>
        <img src={image5} alt='mmkm'></img>
<p>Hotels</p>

      </div>
      <div className={styles.browse}>
        <img src={image6} alt='mmkm'></img>
<p>Apartments</p>

      </div><div className={styles.browse}>
        <img src={image7} alt='mmkm'></img>
<p>Resorts</p>

      </div>
      <div className={styles.browse}>
        <img src={image8} alt='mmkm'></img>
<p>Villas</p>

      </div>
      </div>
      </div>
    
      <section className={styles.unique}>
        <h1>Stay at our top unique properties
</h1>
<div className={styles.unique1}>
<div>
  <img src={image9} alt='alt'/>
  <h3>Caves in Algarve, Portugal</h3>
  <p>Many natural rock formations and grottoes can be found along the coast of the Algarve region. The Algarve is known for its beautiful scenery, cliffs, beaches, and caves, attracting millions of visitors annually.

</p>
  </div>
  <div>
  <img src={image10} alt='alt'/>
  <h3>Caves in Algarve, Portugal</h3>
  <p>Many natural rock formations and grottoes can be found along the coast of the Algarve region. The Algarve is known for its beautiful scenery, cliffs, beaches, and caves, attracting millions of visitors annually.

</p>
  </div>
  <div>
  <img src={image11} alt='alt'/>
  <h3>Caves in Algarve, Portugal</h3>
  <p>Many natural rock formations and grottoes can be found along the coast of the Algarve region. The Algarve is known for its beautiful scenery, cliffs, beaches, and caves, attracting millions of visitors annually.

</p>

  </div><div>
  <img src={image12} alt='alt'/>
  <h3>Caves in Algarve, Portugal</h3>
  <p>Many natural rock formations and grottoes can be found along the coast of the Algarve region. The Algarve is known for its beautiful scenery, cliffs, beaches, and caves, attracting millions of visitors annually.

</p>
</div>
</div>
</section>
<section className={styles.best}>
  <h1>Get inspiration for your next trip
</h1>
<div className={styles.trip}>
  <div className={styles.town}>
    <div className={styles.townOne}>
    <img src={image13} alt='trip'/>
    </div>
    
  </div>
  <div className={styles.town1}>
    <img src={image14} alt='trip'/>
    <h3>
      The best hotels for families

    </h3>
    <p>Discover the best hotel for your family</p>
  </div>
  <div className={styles.town1}>
    <img src={image15} alt='trip'/>
    <h3>
      The best ski town around the world

    </h3>
    <p>Discover a winter wonderland in these charming ski destinations</p>

  </div>

</div>
</section>

<section className={styles.vocation1}>
  <div className={styles.vocation}>
      <p>
        Find <span>{spanValue}</span> for your next trip
      </p>
      <button>Discover homes</button>
      </div>
    </section>
    <section className={styles.end1}>
      <div className={styles.end}>
      <div>
        <h3>Support
</h3>
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
<p>56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA

</p>
<p>012-6532-568-9746

</p>
<p>012-6532-568-97468

</p>
</div>
      </div>
      <p className={styles.book}>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
Copyright © 1996–2024 Booking.com™. All rights reserved.</p>
      <div className={styles.icons}>
      <AiFillFacebook />
      <FaInstagram />
      <FaTwitterSquare />


</div>
    </section>
</div>


      
      
            

    
  )}


export default Stayses;