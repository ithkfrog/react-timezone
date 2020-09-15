import React from "react";

const SelectedTimezone = (props) => {
  let detail;

  if (!props.selectedZone) {
    detail = <p>Please select timezone from above</p>;
  } else {
    detail = (
      <div>
        <p>Timezone: {props.selectedZone.zoneName}</p>
        <p>Current time: {formatDate(props.selectedZone.timestamp)}</p>
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

const formatDate = (ts) => {
  const d = new Date(ts);
  const tf = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return tf.format(d);
};

export default SelectedTimezone;
