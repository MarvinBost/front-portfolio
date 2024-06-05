import "./Home.scss";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/photodeprofil.jpg";

function Home() {
  // eslint-disable-next-line no-debugger
  debugger;
  const { t } = useTranslation();

  return (
    <div className="me animated delay-2 fadeInLeft">
      <aside className="me__aside">
        <h1 className="me__title">
          {t("name")} <span className="me__title--color">{t("lastname")}</span>
        </h1>
        <p className="me__description">{t("description")}</p>
      </aside>
      <div className="me__image animated delay-3 fadeInRight">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Home;
