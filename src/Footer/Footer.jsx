import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTONS } from "../Head";
import { useSelector } from "react-redux";

function Footer({ bestUntil }) {

  const activePrice = useSelector((state) => state.main.activePrice);
  
  return (
    <div className="footer">
      {activePrice === DEFAULT_ACTIVE_BUTTONS ? (
        <TargetLow
          bestUntil={bestUntil}
        />
      ) : (
        <TargetHigh />
      )}
    </div>
  );
}

export default Footer;
