import "./Navbar.scss";
import i18n from "../../services/translate";
import fr from "../../assets/fr.png";
import en from "../../assets/en.png";
import pt from "../../assets/pt.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuInterface } from "../../types/navbar.interface";

function Navbar() {
  const [language, setLanguage] = useState("fr");
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };
  return (
    <nav className="navbar animated delay-1 fadeInUp">
      <div className="navbar__brand">
        <p>
          <NavLink to="/">{t("navbar.title")} </NavLink>
        </p>
      </div>
      <ul className="navbar__links">
        {(t("navbar.menus", { returnObjects: true }) as MenuInterface[]).map(
          (menu: MenuInterface, index: number) => (
            <li key={index}>
              {menu.type === "link" ? (
                // Si le type est "link", créer un lien et si c'est la page active, ajouter la classe "active"
                <NavLink
                  to={menu.link ? menu.link : "/"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {menu.title}
                </NavLink>
              ) : menu.type === "dropdown" &&
                menu.menus &&
                Array.isArray(menu.menus) ? (
                // Si le type est "dropdown", créer une liste déroulante
                <div className="navbar__links--dropdown">
                  <span>{menu.title}</span>
                  <ul className="navbar__links--dropdown__list">
                    {menu.menus.map((submenu: MenuInterface, subIndex) => (
                      <li
                        key={subIndex}
                        className="navbar__links--dropdown__list--item"
                      >
                        <a href={submenu.link}>{submenu.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          )
        )}
      </ul>

      <div className="navbar__language">
        <img
          src={fr}
          alt="fr"
          onClick={() => changeLanguage("fr")}
          className={language === "fr" ? "active" : ""}
        />
        <img
          src={en}
          alt="en"
          onClick={() => changeLanguage("en")}
          className={language === "en" ? "active" : ""}
        />
        <img
          src={pt}
          alt="pt"
          onClick={() => changeLanguage("pt")}
          className={language === "pt" ? "active" : ""}
        />
      </div>
    </nav>
  );
}

export default Navbar;
