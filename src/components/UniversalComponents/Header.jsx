import { Link, useNavigate } from "react-router";

import { FaSearch, FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import Logo from "./HifiLogo";
import paperplaneicon from "/PaperplaneIcon.png";
import phoneicon from "/PhoneIcon.png";
import { useActionData } from "react-router";

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


  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     const dropdown = document.querySelector(".header__navigation-dropdown");
  //     if (dropdown && !dropdown.contains(e.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      console.log("token:", token);
    } else {
      // Redirect or handle token absence
      console.log("No token found");
      setToken(null);
    }
  }); // Empty dependency array means it runs once on mount

  // Handle logout action
  const handleLogout = (event) => {
    event.preventDefault(); // Prevent link from being followed
    sessionStorage.removeItem('token'); // Remove token from sessionStorage
    setToken(null); // Update the state to reflect that the user is logged out
    // navigate('/login'); // Optionally redirect to the login page
  };

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
          {/* If the token is not null, show Log Out, otherwise show Log In */}
          <Link to={token ? '#' : '/login'} onClick={token ? handleLogout : undefined}>
            <FaUser className="header__profile-icon" />
            <p className="header__para">{token === null ? 'Log ind' : 'Log ud'}</p>
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
          <Link to="/list" className="header__navigation-item">Boliger til salg</Link>
          <Link to="/maegler" className="header__navigation-item">Mæglere</Link>
          <Link to="/fav" className="header__navigation-item">Mine favoritter</Link>
          <Link to="/contact" className="header__navigation-item">Kontakt os</Link>
        </section>
      </section>
    </header>
  );
}

