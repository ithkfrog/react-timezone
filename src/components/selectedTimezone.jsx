import React from "react";

const SelectedTimezone = (props) => {
  let detail;

  if (!props.selectedZone) {
    detail = <p>Please select timezone from above</p>;
  } else {
    detail = (
      <div>
        <p>Timezone: {props.selectedZone.zoneName}</p>
        <p>Current time: {formatDate(props.selectedZone)}</p>
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

//
// TODO:
// Investigate when converting different timezones it always return current
// Sydney time regardless the offset.
const formatDate = (timeZone) => {
  const d = new Date((timeZone.timestamp - timeZone.gmtOffset) * 1000);
  const tf = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timeZone.timeZone,
  });
  return tf.format(d);
};

export default SelectedTimezone;
