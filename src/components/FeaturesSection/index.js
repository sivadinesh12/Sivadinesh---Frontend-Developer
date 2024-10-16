import Card2Img from "../../card2.svg";
import Card4Img from "../../card4.svg";
import Card6Img from "../../card6.svg";
import "./index.css";

const FeaturesSection = () => {
  return (
    <div className="features-bg-container">
      <div className="features-cards-container">
        <div className="features-top-container">
          <div className="card card1">
            <div className="outer-layer-1">
              <div className="outer-layer-2">
                <div className="outer-layer-3">
                  <div className="inner-layer" st>
                    <p className="arrows">{"< >"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-container">
              <h3 className="card-heading">Trade Optimizer</h3>
              <p className="card-des">
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity.
              </p>
            </div>
          </div>
          <div>
            <div className="card card2">
              <div className="card2-content">
                <h3 className="card-heading card2-heading">Market Insight</h3>
                <p className="card-des card2-des">
                  Stay ahead of the market. Get real-time updates on market
                  trends, track top traders' movements, and spot signals from
                  key influencers.
                </p>
              </div>
              <img src={Card2Img} alt="card2" className="card2-img" />
            </div>
            <div className="card card3">
              <h2 className="features-heading">Our Features</h2>
            </div>
          </div>
          <div className="card card4">
            <div className="card4-img-container">
              <img src={Card4Img} alt="card4" className="card4-img" />
              <h1 className="card4-heading">AI</h1>
            </div>
            <div className="content-container  ">
              <h3 className="card-heading">Risk Guard</h3>
              <p className="card-des">
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared for anything.
              </p>
            </div>
          </div>
        </div>
        <div className="features-bottom-container">
          <div className="card card5">
            <h3 className="card-heading">Portfolio Sync</h3>
            <p className="card-des">
              Easily manage your portfolio. You'll always know what you own, how
              it's performing, and where it’s headed.
            </p>
          </div>
          <div className="card card6">
            <div className="card2-content">
              <h3 className="card-heading">Opportunity Scout</h3>
              <p className="card-des">
                Find exciting new projects, events and tokens that others might
                be missing. Identifying promising opportunities early, so you
                never miss out on the next big thing.
              </p>
            </div>
            <img src={Card6Img} alt="card6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
