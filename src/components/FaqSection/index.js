import faq from "../../faq.png";
import "./index.css";

const FaqSection = () => {
  return (
    <div className="faq-bg">
      <h1>Frequently Asked Questions</h1>
      <img src={faq} alt="faq" />
    </div>
  );
};

export default FaqSection;
