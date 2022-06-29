import { useState } from "react";
import { useData } from "../../context/Context";
import "./LangMenu.css"

const LangMenu = () => {
  const {language, setLanguage} = useData()
  const [toggle, setToggle] = useState(true)

  function handleClick() {
    toggle ? setToggle(false) : setToggle(true)
  }

  function handleLanguage(e) {
    setLanguage(e.target.innerHTML)
  }
    return (
  <div className="dropdown">
    <button onClick={handleClick} className="dropbtn">EN</button>
    {toggle && <div id="myDropdown" className="dropdown-content">
      <a onClick={handleLanguage} href="#">EN</a>
      <a onClick={handleLanguage} href="#">AR</a>
      <a onClick={handleLanguage} href="#">HE</a>
    </div>}
  </div>
    )
}
export default LangMenu