import { Link } from "react-router-dom";
import LangMenu from "../../components/lang/LangMenu";
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
          <div className="home">HOME</div>
        </Link>
        <Link to={`/attractions`}>
          <div className="sites">ATTRACTIONS</div>
        </Link>
        <Link to={`/quiz`}>
          <div className="quiz">QUIZ</div>
        </Link>
        <LangMenu/>
        </div>
      </nav>

    </div>
  );
};

export default Header;
