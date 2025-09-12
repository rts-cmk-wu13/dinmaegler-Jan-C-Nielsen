import ProductCard from "../UniversalComponents/ProductCard";
import { SlEqualizer } from "react-icons/sl";
import DropdownMenu from "./DropdownMenu";
import React, { useState } from 'react';
import DoubleSlider from "../DoubleSlider/DoubleSlider";
import whiteheart from "/WhiteHeart.png"
import blackheart from "/BlackHeart.png";
import { useLocation } from "react-router";

function flattenObjectValues(obj) {
    let result = [];

    function recurse(value) {
        if (value === null || value === undefined) {
            return;
        }

        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                value.forEach(item => recurse(item));
            } else {
                Object.values(value).forEach(val => recurse(val));
            }
        } else {
            result.push(String(value));
        }
    }

    recurse(obj);
    return result.join(" ");
}

export default function ProductRendering({ data }) {

    const location = useLocation();
    const searchQuery = location.state?.query;
    console.log("Search query from location state:", searchQuery || "No query provided");

    const products = data
    console.log(data)

    const filteredProducts = searchQuery
        ? products.filter((item) => {
            const fullText = flattenObjectValues(item).toLowerCase();
            return fullText.includes(searchQuery.toLowerCase());
        })
        : products;

    return (
        <>
            <h1 className="list__h1">Boliger til salg</h1>
            <p className="list__p">Der er {products.length} boliger til salg</p>
            <section className="list__filter">
                <div className="list__dropdown">
                    <p className="list__filter__text">Ejendomstype</p>
                    <DropdownMenu />
                </div>
                <div className="list__slider">
                    <p className="list__filter__text">Pris-interval</p>
                    <DoubleSlider />
                </div>
            </section>

            <section className="productlist">
                {filteredProducts.map(item => (
                    <ProductCard
                        key={item.id}
                        title={item.type}
                        price={item.price}
                        Id={item.id}
                        btnText="Read more"
                        btnPath="details"
                        pic={item.images[0].formats.thumbnail.url}
                        city={item.city}
                        postalcode={item.postalcode}
                        adress1={item.adress1}
                        rooms={item.rooms}
                        cost={item.cost}
                        livingspace={item.livingspace}
                        whiteheart={whiteheart}
                        blackheart={blackheart}
                    />
                ))}
            </section>
        </>
    )
}