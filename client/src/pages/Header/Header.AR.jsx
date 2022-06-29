import { Link } from "react-router-dom";
import LangMenu from "../../components/lang/LangMenu";
import "./Header.css"

const HeaderAR = () => {

  return (
    <div className="Header">
      <nav>
      <Link to={`/`}>
        <div className="logo-container">
          <div className="img-container">
          <img src={require("../../assets/favicon.ico")} alt="logo"/>
          </div>
          <div className="top">
            <p className="big">BUCKETLIST</p>
            <p className="small">PLACES TO VISIT IN YOUR LIFETIME</p>
          </div>
        </div>
        </Link>
        <div className="menu-container">
        <Link to={`/`}>
          <div>الصفحة الرئيسية</div>
        </Link>
        <Link to={`/attractions`}>
          <div>جميع المواقع</div>
        </Link>
        <Link to={`/quiz`}>
          <div>اختبار</div>
        </Link>
        <LangMenu/>
        </div>
      </nav>

    </div>
  );
};

export default HeaderAR;
