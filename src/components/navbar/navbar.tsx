import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher/language-switcher";

export const Navbar = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" onClick={() => navigate(`${ROUTES.DASHBOARD}`)}>
          <span className="logo-health">Health</span>
          <span className="logo-food">food</span>
        </div>
        <ul className="list">
          <li className="items" onClick={() => navigate(`${ROUTES.RECIPES}`)}>
            {t("recipes")}
          </li>
          <li className="items" onClick={() => navigate(`${ROUTES.HOW_TO}`)}>
            {t("about")}
          </li>
          <li className="items" onClick={() => navigate(`${ROUTES.LIFESTYLE}`)}>
            {t("lifestyleAndEvent")}
          </li>
          <li className="items" onClick={() => navigate(`${ROUTES.BLOG}`)}>
            {t("blog")}
          </li>
        </ul>
      </div>
      <Button
        variant="outline-warning"
        className="button"
        onClick={() => navigate(`${ROUTES.RECIPES}/${ROUTES.NEW_RECIPE}`)}
      >
        {t("getStarted")}
      </Button>
    </nav>
  );
};

export default Navbar;
