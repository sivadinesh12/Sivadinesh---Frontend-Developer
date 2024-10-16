import preview from "../../preview.mp4";
import fullpower from "../../fullpower.mp4";
import insights from "../../insights.mp4";
import check from "../../check.svg";
import gradient from "../../image (2).png";
import "./index.css";

const RoadmapSection = () => {
  return (
    <div className="roadmap-bg">
      <h1 style={{ color: "#ffffff", fontSize: "40px", textAlign: "center " }}>
        Roadmap
      </h1>
      <div className="roadmap-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="roadmap-content">
            <p
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              Phase1
            </p>
            <h2 style={{ color: "#ffffff" }}>Kicking Off</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>Launch of EthAi: Officially</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>Development of Core AI Agents</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>User Onboarding Campaign</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                Community Engagement Initiatives
              </p>
            </div>
          </div>
          <div>
            <video autoPlay loop muted className="roadmap-video">
              <source src={preview} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="video-container">
            <video autoPlay loop muted className="roadmap-video">
              <source src={insights} type="video/mp4" />
            </video>
            <img src={gradient} alt="gradient" className="gradient" />
          </div>
          <div className="roadmap-content">
            <p
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              Phase2
            </p>
            <h2 style={{ color: "#ffffff" }}>Bigger Insights</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                Introduction of Advanced AI Agents
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>Strategic Partnerships</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>User Interface Optimization</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                Comprehensive Marketing Campaign
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="roadmap-content">
            <p
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              Phase3
            </p>
            <h2 style={{ color: "#ffffff" }}>Full Power</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                Introduction of Enhanced Features
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                API Integration for Data Access
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                Launch of Community-Driven Initiatives
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={check} alt="check" style={{ marginRight: "10px" }} />
              <p style={{ color: "#ffffff" }}>
                Continuous Improvement and Updates
              </p>
            </div>
          </div>
          <div>
            <video autoPlay loop muted className="roadmap-video">
              <source src={fullpower} type="video/mp4" />
            </video>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
