import pointicon from "/PointIcon.png";
import layericon from "/LayerIcon.png";
import hearticon from "/HeartIcon.png";
import galleryicon from "/GalleryIcon.png";

import Carousel from "./Carousel";

import { Link, useLocation } from "react-router";


export default function ProductDetails({ product }) {
  const location = useLocation();
  console.log(product);
  return (
    <section className="product__details">
      <img src={product.images[0].url} alt={product.name} className="product__img" />

      <div className="product__info">
        <div className="product__address">
          <p>{product.adress1}</p>
          <p>{product.postalcode} {product.city}</p>
        </div>
        <Link to={`carousel/`} state={{ backgroundLocation: location }}> <img src={pointicon} className="product__status" /></Link>
        <Link to={`carousel/`} state={{ backgroundLocation: location }}> <img src={layericon} className="product__status" /></Link>
        <Link to={`carousel/`} state={{ backgroundLocation: location }}> <img src={hearticon} className="product__status" /></Link>
        <Link to={`carousel/`} state={{ backgroundLocation: location }}> <img src={galleryicon} className="product__status" /></Link>
        <div className="product__price">
          <span className="price">Kr. {new Intl.NumberFormat('de-DE').format(product.price)}</span>
        </div>
      </div>

      <hr />

      <div className="product__specifications">
        <section className="product__specifications-column">
          <p>Sagsnummer: {product.id}</p>
          <p>Boligareal: {product.livingspace} m²</p>
          <p>Grundareal: {product.lot} m²</p>
          <p>Værelser: {product.rooms}</p>
        </section>
        <section className="product__specifications-column">
          <p>Kælder: {product.basementsize}</p>
          <p>Byggeår: {product.year}</p>
          <p>Ombygget: {product.remodel}</p>
          <p>Energimærke: {product.energylabel}</p>
        </section>
        <section className="product__specifications-column">
          <p>Udbetaling: {new Intl.NumberFormat('de-DE').format(product.payment)} kr.</p>
          <p>Brutto: {new Intl.NumberFormat('de-DE').format(product.gross)} kr.</p>
          <p>Netto: {new Intl.NumberFormat('de-DE').format(product.netto)} kr.</p>
          <p>Ejerudgift: {new Intl.NumberFormat('de-DE').format(product.cost)} kr.</p>
        </section>
      </div>

      <div className="product__info">
        <section className="product__decription">
          <h3>Beskrivelse</h3>
          <p>{product.description}</p>
        </section>

        <section className="product__agent">
          <img src={product.agent.image.url} alt={product.agent.name} className="agent__img" />
          <div>
            <h3>Ejendomsmægler</h3>
            <p>{product.agent.name}</p>
            <p>{product.agent.phone}</p>
            <p>{product.agent.email}</p>
          </div>
        </section>

      </div>
    </section>
  );
}
