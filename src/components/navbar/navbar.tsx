import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="list">
        <li className="items" onClick={() => navigate("/recipes")}>
          Recipes
        </li>
        <li className="items" onClick={() => navigate("/howto")}>How to</li>
        <li className="items" onClick={() => navigate("/lifestyle")}>Lifestyle & Event</li>
        <li className="items" onClick={() => navigate("/blog")}>Blog</li>
        <Button variant="outline-warning" className="button">
          Get started
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
