import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const list = [
    { name: "Strona główna", path: "/", exact: true },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contact" },
    { name: "Panel Admina", path: "/admin" },
  ];

  const NavList = list.map((item) => (
    <li key={item.name}>
      <NavLink exact={item.exact ? item.exact : false} to={`${item.path}`}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{NavList}</ul>
    </nav>
  );
};

export default Navigation;
