import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo" onClick={() => navigate(`${ROUTES.DASHBOARD}`)}>
        <span className="logo-health">Health</span>
        <span className="logo-food">food</span>
      </div>
      <ul className="list">
        <li className="items" onClick={() => navigate(`${ROUTES.RECIPES}`)}>
          Recipes
        </li>
        <li className="items" onClick={() => navigate(`${ROUTES.HOW_TO}`)}>
          How to
        </li>
        <li className="items" onClick={() => navigate(`${ROUTES.LIFESTYLE}`)}>
          Lifestyle & Event
        </li>
        <li className="items" onClick={() => navigate(`${ROUTES.BLOG}`)}>
          Blog
        </li>
        <Button variant="outline-warning" className="button">
          Get started
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
