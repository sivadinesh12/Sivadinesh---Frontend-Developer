import Header from "../Header";
import Video from "../../hero-bg.mp4";
import "./index.css";

const HeroSection = () => {
  return (
    <div className="hero-bg">
      <video autoPlay loop muted className="bg-video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="hero-gradient">
        <div></div>
      </div>
      <div className="content-overlay">
        <Header />
        <div className="hero-content-container">
          <h1 className="hero-heading">
            When Innovation <br></br> Meets <span className="highlighted">Investment</span>
          </h1>
          <p className="hero-des">Empowering Trading Through Advanced Technology</p>
          <button className="hero-btn">Open dApp</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
