import Button from "./Button";
import React, { useState } from 'react';
import { Link } from "react-router";

export default function ProductCard({ headertext, headericon, title, price, pagefooter, Id, btnText, btnPath, pic,
    city, postalcode, adress1, rooms, cost, livingspace, blackheart, whiteheart
}) {

    const [isFavorite, setIsFavorite] = useState(() => {
        return sessionStorage.getItem('Home' + Id) === "true";
    });

    const handleSectionClick = (event, id) => {
        event.preventPropagation();
        console.log('Section clicked for product ID:', id);
    };

    const handleImageClick = async (event, id) => {
        event.preventPropagation();

        let key = 'Home' + id;

        const newState = !isFavorite;
        setIsFavorite(newState);

        if (newState) {
            sessionStorage.setItem(key, "true");
        } else {
            sessionStorage.removeItem(key);
        }

        let itbe = [];

        console.log('Image clicked for product ID:', id);
        // Save ID to sessionStorage
        sessionStorage.setItem('Home' + id, "true");

        for (let i = 0; i < sessionStorage.length; i++) {
            key = sessionStorage.key(i);
            if (!key.startsWith('Home')) continue; // Skip keys that don't start with 'Home'
            itbe.push(key.replace('Home', ''));
        }

        const user = sessionStorage.getItem("userid");
        const token = sessionStorage.getItem("token");
        const data = { favorites: itbe };



        const response = await fetch("https://dinmaegler.onrender.com/users/" + user, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token,
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()
        console.log("response data:" + responseData);
    };

    return (
        <>
            <article className="productcard">

                <header className="productcard__header">
                    <p className="productcard__header-text">{headertext}</p>
                    <span>{headericon}</span>
                </header>
                <Link to={`/details/${Id}`} className="no-underline" onClick={(event) => handleSectionClick(event, Id) }>
                    <section className="productcard__details"  >
                    <div className="productcard__img-container">
                        <div className="productcard__img">
                            <img src={pic} alt={title} />
                            <img className="productcard__heart" onClick={(event) => handleImageClick(event, Id)} src={isFavorite ? blackheart : whiteheart} />
                        </div>
                    </div>
                    <p className="productcard__adress1">{adress1}</p>
                    <p className="productcard__city">
                        {postalcode},  {city}
                    </p>
                    <p className="productcard__textbox">
                        <span className="productcard__title">{title}•</span> <span className="productcard__cost">Ejerudgift {new Intl.NumberFormat('de-DE').format(cost)} kr.</span>
                    </p>
                    <hr></hr>
                    <p className="productcard__info">
                        <span className="productcard__rooms">
                            {rooms} værelser • {livingspace} m²
                        </span>
                        <span className="productcard__price">
                            Kr. {new Intl.NumberFormat('de-DE').format(price)}
                        </span>
                    </p>
                </section>
            </Link>

        </article >
        </>
    )
}