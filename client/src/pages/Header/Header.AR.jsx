import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {

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
        </div>
      </nav>

    </div>
  );
};

export default Header;
