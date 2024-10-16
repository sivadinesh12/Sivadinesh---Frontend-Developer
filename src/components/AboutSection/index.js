import Graph from "../../graph.svg";
import Wallet from "../../wallet.svg";
import Tools from "../../Tools.svg";
import FutureTechnology from "../../Future Technology.svg";
import "./index.css";

const AboutSection = () => {
  return (
    <div className="about-bg">
      <h1>About EthAI</h1>
      <p>
        At EthAi, we’re all about making crypto trading easier and more
        intuitive.<br></br> We provide tools that help traders keep up with all
        new market trends, track top traders’ movements.
      </p>
      <button className="about-btn">Read More</button>
      <div className="about-cards-container">
        <div className="about-card">
          <img src={Graph} alt="graph" className="card-img" />
          <h3 className="card-header">Stay Ahead</h3>
          <p className="card-des">
            No more guesswork—get clear, trustable insights.
          </p>
        </div>
        <div className="about-card">
          <img src={Wallet} alt="Wallet" className="card-img" />
          <h3 className="card-header">Know Your Assets</h3>
          <p className="card-des">
            Always stay on top of how your investments are performing.
          </p>
        </div>
        <div className="about-card">
          <img src={Tools} alt="tools" className="card-img" />
          <h3 className="card-header">Simple, Not Overwhelming</h3>
          <p className="card-des">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>
        <div className="about-card">
          <img src={FutureTechnology} alt="tech" className="card-img" />
          <h3 className="card-header">Future-Proof</h3>
          <p className="card-des">
            We’re constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
