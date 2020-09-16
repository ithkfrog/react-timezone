function convertOffset(t) {
  return t / 60 / 60;
}

function encodeZoneName(n) {
  return n.replace("/", "%2F");
}

function decodeZoneName(n) {
  return n.replace("%2F", "/");
}
//
// TODO:
// Investigate when converting different timezones it always return current
// Sydney time regardless the offset.
function formatDate(timeZone) {
  const d = new Date((timeZone.timestamp - timeZone.gmtOffset) * 1000);
  const tf = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timeZone.zoneName,
  });
  return tf.format(d);
}

export default {
  convertOffset,
  encodeZoneName,
  decodeZoneName,
  formatDate,
};
