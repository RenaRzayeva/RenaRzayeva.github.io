import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './img/Top-10-SA-Attractions-Machu-Picchu.jpg';
import image2 from './img/the-kelpies.jpeg';
import image3 from './img/palmademallorca-aerialview.jpg';
import image4 from './img/p0fzyy89.jpg';
import image5 from './img/Куда-поехать-в-октябре-на-море.jpg';
import image6 from './img/istock000061987592large.jpg';
import styles from './Tickets.module.css';
import axios from 'axios';
import { HiChevronDoubleDown } from "react-icons/hi2";

import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const UnsplashAPIKey = 'vCLNq9rlJPizbCrfm9ZbxsB_abUWeD_PDM-MUul9JUY';

const Tickets = () => {
    const [countries, setCountries] = useState([]);
    const [photos, setPhotos] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                const countryList = data.map(country => ({
                    name: country.name.common,
                    capital: country.capital ? country.capital[0] : 'Unknown'
                }));
                setCountries(countryList);
                return countryList.map(country => country.capital);
            })
            .then(capitals => fetchPhotos(capitals))
            .catch(error => {
                console.error('Error fetching countries:', error);
                setError(error);
            });
    }, []);

    const fetchPhotos = async (capitals) => {
        try {
            const photosData = await Promise.all(capitals.map(capital => getCapitalPhoto(capital)));
            const photosObject = capitals.reduce((acc, capital, index) => {
                acc[capital] = photosData[index];
                return acc;
            }, {});
            setPhotos(photosObject);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    const getCapitalPhoto = async (capital) => {
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                params: {
                    query: capital,
                    client_id: UnsplashAPIKey,
                    per_page: 1,
                }
            });
            return response.data.results[0]?.urls?.regular || '';
        } catch (error) {
            console.error('Error fetching photo from Unsplash:', error);
            return '';
        }
    };

    return (
        <div>
            <div className={styles.first1}>
                <h1>Attractions, activities, and experiences</h1>
                <p>Discover things to do that match your interests and travel style</p>
            </div>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div className={styles.carousel}>
                    <img src={image1} alt="Image 1" />
                </div>
                <div className={styles.carousel}>
                    <img src={image2} alt="Image 2" />
                </div>
                <div className={styles.carousel}>
                    <img src={image3} alt="Image 3" />
                </div>
                <div className={styles.carousel}>
                    <img src={image4} alt="Image 4" />
                </div>
                <div className={styles.carousel}>
                    <img src={image5} alt="Image 5" />
                </div>
                <div className={styles.carousel}>
                    <img src={image6} alt="Image 6" />
                </div>
            </Carousel>
            <h2 className={styles.more}>Explore more destinations
                </h2>
            <div className={styles.countriesList}>
                
                {error ? (
                    <p>Error fetching countries: {error.message}</p>
                ) : (
                    countries.map((country, index) => (
                        <div key={index} className={styles.country}>
                            
                            <h2>{country.name}</h2>
                            <p>Capital: {country.capital}</p>
                            {photos[country.capital] ? (
                                <img src={photos[country.capital]} alt={`${country.capital}`} width="300" />
                                
                            ) : (
                                <p>Loading...</p>
                            )}
                          
                    
                        </div>
                    ))
                )}
            </div>
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
    );
};

export default Tickets;
