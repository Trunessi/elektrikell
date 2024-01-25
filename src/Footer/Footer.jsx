import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";

function Footer(props) {
  return <div className="footer">{props.activePrice === "High" ? TargetHigh() : TargetLow()}</div>;
}

export default Footer;
