import React from "react";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";

const Header = () => {

  const bag = useSelector(store => store.bag);
  // console.log("bag contains: ", bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="/images/myntra-logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>

      <nav className="nav_bar">
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
        <Link to="/">Kids</Link>
        <Link to="/">Home & Living</Link>
        <Link to="/">Beauty</Link>
        <Link to="/">
          Studio <sup>0</sup>
        </Link>
      
      </nav>

      <div className="search_bar">
        <span className="material-icons search_icon"><IoIosSearch/></span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className="action_bar">
        <div className="action_container">
          <BsPerson />
          <span className="action_name">Profile</span>
        </div>
        <div className="action_container">
          <CiHeart />
          <span className="action_name">Wishlist</span>
        </div>
        <Link className="action_container" to="/bag">
          <HiOutlineShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
