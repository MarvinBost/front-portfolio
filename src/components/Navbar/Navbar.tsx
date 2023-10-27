import "./Navbar.scss";
import i18n from "../../services/translate";
import fr from "../../assets/fr.png";
import en from "../../assets/en.png";
import pt from "../../assets/pt.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
        <p> {t("navbar-title")} </p>
      </div>
      <div className="navbar__links">
        <a href="#about">{t("navbar-formations")}</a>
        <a href="#skills">{t("navbar-skills")}</a>
        <a href="#projects">{t("navbar-projects")}</a>
      </div>
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
