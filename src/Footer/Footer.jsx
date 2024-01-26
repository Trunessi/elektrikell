import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTONS } from "../Head";


function Footer(props) {
  return <div className="footer">{props.activePrice === DEFAULT_ACTIVE_BUTTONS ? <TargetLow/> : <TargetHigh/>}</div>;
}

export default Footer;
