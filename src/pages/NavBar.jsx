import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/Logo (4).svg";
import plus from "../assets/plus.png";
import user from "../assets/user.png";
import hero from "../assets/heroBg.png";
import copy from "../assets/copy.png";
import creditCard from "../assets/creditCard.png";
import search from "../assets/search.png";
import mapPin from "../assets/mapPin.png";
import vector from "../assets/Vector.png";
import home from "../assets/home.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <img className="logo" src={Logo} alt="" />
            </li>{" "}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/vendor">Vendor</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <div className="navButtons">
            <button className="User">
              <img src={user} alt="" />
              Sign In
            </button>
            <button className="Plus">
              <img src={plus} alt="" />
              Add Property
            </button>
          </div>
        </nav>
      </div>
      <div className="middle">
        <div className="rightSide">
          <img src={hero} alt="" />
        </div>
        <div className="leftSide">
          <div className="text">
            <h1> Easiest way to find a perfect property</h1>
            <p>
              Utilize online real estate platforms for the simplest path to
              discovering the ideal property, with tailored search filters and
              comprehensive listings at your fingertips.
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <img src={home} alt="" />
              <Link to="/for rent"> For Rent</Link>
              <img src={vector} alt="" />
            </div>
            <div className="box">
              <Link to="/location">
                <img src={mapPin} alt="" />
                Location
              </Link>
            </div>
            <div className="box">
              <Link to="/property type">
                <img src={copy} alt="" />
                Property type
              </Link>
              <img src={vector} alt="" />
            </div>
            <div className="box">
              <Link to="/price">
                <img src={creditCard} alt="" />
                Price
              </Link>
              <img src={vector} alt="" />
            </div>
            <button className="searchBtn">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </div>

      <footer>
        <p>Coded by nino_ch </p>
      </footer>
    </div>
  );
};
export default Navbar;
