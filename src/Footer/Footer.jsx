import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_BUTTONS } from "../Head";

function Footer({ activePrice, activeHour, setActiveHour, bestUntil }) {
  return (
    <div className="footer">
      {activePrice === DEFAULT_ACTIVE_BUTTONS ? (
        <TargetLow
          activeHour={activeHour}
          setActiveHour={setActiveHour}
          bestUntil={bestUntil}
        />
      ) : (
        <TargetHigh />
      )}
    </div>
  );
}

export default Footer;
