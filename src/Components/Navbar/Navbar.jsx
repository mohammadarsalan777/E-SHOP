import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFix, setHeaderFix] = useState(false);

    // For headerfixing
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFix(true);
        } else {
            setHeaderFix(false);
        }
    });
    return (
        <header
            className={`header-section style-4 ${headerFix ? "header-fixed fadeInUp" : ""
                }`}
        >
            {/* Header starts here */}
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to={"/Signup"} className="lab-btn me-4">
                            <span>Create Signup</span>
                        </Link>
                        <Link to={"/login"}>
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="header-botttom">
                <div className="container">
                    <div className="header-wrapper">
                        {/* logo */}
                        <div className="logo-search-acte">
                            <div className="logo">
                                <Link to={"/"}>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        {/* Menu */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"/shop"}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link to={"/blog"}>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to={"/about"}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to={"/contact"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* SignIn and Login */}
                            <Link to={"/sign-up"} className="lab-btn me-3 d-none d-md-block">
                                Create an Acount
                            </Link>
                            <Link to={"/login"} className="d-none d-md-block">
                                Log In
                            </Link>

                            <div onClick={() => { setMenuToggle(!menuToggle) }} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/* social-toggle */}
                            <div onClick={() => setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none">
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
