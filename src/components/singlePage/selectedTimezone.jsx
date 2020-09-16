import React from "react";
import timeUtils from "../../tools/timeUtils";

const SelectedTimezone = (props) => {
  let detail;

  if (!props.selectedZone) {
    detail = <p>Please select timezone from above</p>;
  } else {
    detail = (
      <div>
        <p>Timezone: {props.selectedZone.zoneName}</p>
        <p>Current time: {timeUtils.formatDate(props.selectedZone)}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Selected timezone:</h2>
      {detail}
    </div>
  );
};

export default SelectedTimezone;
