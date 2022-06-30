import { useState } from "react";
import { useData } from "../../context/Context";
import "./LangMenu.css";

const LangMenu = () => {
  const {language, setLanguage} = useData()
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    toggle ? setToggle(false) : setToggle(true);
  }

  function handleLanguage(e) {
    setLanguage(e.target.innerHTML)
    setToggle(false)
  }
    return (
  <div className="dropdown">
    <button onClick={handleClick} className="dropbtn">{language}</button>
    {toggle && <div id="myDropdown" className="dropdown-content">
      <div onClick={handleLanguage}>EN</div>
      <div onClick={handleLanguage}>AR</div>
      <div onClick={handleLanguage}>HE</div>
      <div onClick={handleLanguage}>RU</div>
    </div>}
  </div>
    )
}
export default LangMenu
