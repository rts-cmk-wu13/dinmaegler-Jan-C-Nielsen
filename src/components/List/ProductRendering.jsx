import ProductCard from "../UniversalComponents/ProductCard";
import { SlEqualizer } from "react-icons/sl";
import DropdownMenu from "./DropdownMenu";
import React, { useState } from 'react';

export default function ProductRendering({ data }) {
   // const [selected, setSelected] = useState('');
    const products = data
    console.log(data)
    return (
        <>
            <h1>Boliger til salg</h1>
            <DropdownMenu/>
            <section className="productlist">
                {products.map(item => (
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
                    />
                ))}
            </section>
        </>
    )
}