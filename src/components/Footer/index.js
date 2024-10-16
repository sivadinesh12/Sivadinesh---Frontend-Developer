import social from "../../Frame 213.png";
import logo from "../../Frame 43095.png";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={logo} alt="logo" style={{ marginBottom: "15px" }} />
        <img src={social} alt="logo" />
      </div>
      <div>
        <h3 style={{color:"#ffffff"}}>“Designed for traders of today, just like you."</h3>
       <input type="input " className="input"/>
      </div>
    </div>
  );
};

export default Footer;
