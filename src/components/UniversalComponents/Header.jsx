import { Link, useNavigate } from "react-router";

import { FaSearch, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import Logo from "./HifiLogo";
import paperplaneicon from "/PaperplaneIcon.png";
import phoneicon from "/PhoneIcon.png";


export default function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/list');
    setSearchValue("");
  };

  const categories = [

  ];


  useEffect(() => {
    const handleClickOutside = (e) => {
      const dropdown = document.querySelector(".header__navigation-dropdown");
      if (dropdown && !dropdown.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <section className="header__top">
        <div className="header__contactItems">
         
          <Link to="contact" className="header__contactItem">
            <img src={paperplaneicon} />
              <p className="header__para">4000@dinmaegler.com</p>
          </Link>

          <Link to="contact" className="header__contactItem">
            <img src={phoneicon} />
            <p className="header__para">+45 7070 4000</p>
          </Link>
        </div>

        <section className="header__link-icons">
          <Link to="/login">
            <FaUser className="header__profile-icon" />
             <p className="header__para">Log ind</p>
          </Link>

        </section>
      </section>

      <section className="header__bottom">

        <section className="header__logo">
          <Link to="/" className="header__logo-link">
            <Logo />
          </Link>
        </section>

        <section className="header__navigation">
          <Link to="/about" className="header__navigation-item">Boliger til salg</Link>
          <Link to="/contact" className="header__navigation-item">Mæglere</Link>
          <Link to="/about" className="header__navigation-item">Mine favoritter</Link>
          <Link to="/contact" className="header__navigation-item">Kontakt os</Link>
        </section>
      </section>
    </header>
  );
}

