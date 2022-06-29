import "./Header.css"

const Header = () => {

  return (
    <div className="Header">
      <nav>
        <div className="logo-container">
          <div className="img-container">

          <img src={require("../../assets/favicon.ico")} alt="logo"/>
          </div>
          <div className="top">


          <p className="big">BUCKETLIST</p>
          <p className="small">PLACES TO VISIT IN YOUR LIFETIME</p>
          </div>
          {/* <img src={require("../../assets/logo.png")} alt="logo"/> */}
        </div>
        <div className="menu-container">
          <div>Home</div>
          <div>Attractions</div>
          <div>Quiz</div>
        </div>
      </nav>

    </div>
  );
};

export default Header;
