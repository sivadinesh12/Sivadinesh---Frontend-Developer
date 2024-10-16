import Donut from "../../Donut.svg";
import Details from "../../Frame 43122.png";
import "./index.css";

const TokenomicsSection = () => {
  return (
    <div className="tokenomics-bg">
      <h1 style={{ color: "#ffffff", fontSize: "40px", textAlign: "center" }}>
        Tokenimcs
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img src={Donut} alt="donut" />
        <img src={Details} alt="details" />
      </div>
    </div>
  );
};

export default TokenomicsSection;
