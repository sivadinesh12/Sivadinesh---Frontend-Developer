import logo from "../../Group 20.svg";
import "./index.css";

const Header = () => {
  return (
    <nav className="nav-bar ">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="logo-text">EthAi</h3>
      </div>
      <div className="navigation-menu">
        <a href="#">Features</a>
        <a href="#">Why us</a>
        <a href="#">Tokenomics</a>
        <a href="#">Roadmap</a>
      </div>
      <div className="nav-btn-container">
        <button className="btn login-btn">Log in</button>
        <button className="btn whitepaper-btn">WhitePaper</button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="menu-bar"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>
    </nav>
  );
};

export default Header;
