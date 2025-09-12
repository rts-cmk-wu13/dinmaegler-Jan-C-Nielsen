import heropic from "/architecture-1867187_1920 1.jpg";
import { Link, useNavigate } from "react-router";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import Button from "../UniversalComponents/Button";

export default function Hero() {

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form reload
    if (searchInput.trim()) {
      navigate("/list", { state: { query: searchInput } });
    }
  };
  return (
    <div className="hero">
      <img src={heropic} alt="Hero Background" className="hero__background" />

      <div className="hero__content">
        <h1 className="hero__title">Søg efter din drømmebolig</h1>
        <div className="hero__subtitle-wrapper">
          <p className="hero__subtitle">Søg blandt 158 boliger til salg i 74 butikker </p>
          <p className="hero__description">
            Hvad skal din næste bolig indeholde
          </p>
          <form className="hero__search-form">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
              className="hero__search-input"
            />
            <button
              type="submit"
              classname="hero__search-button"
              onClick={handleSearch}>Søg...</button>
            
          </form>
        </div>
      </div>

    </div>
  );
}
