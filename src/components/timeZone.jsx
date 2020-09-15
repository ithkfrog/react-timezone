import React, { Component } from "react";
import { getZones } from "../services/mockTimezone";

class TimeZones extends Component {
  state = {
    zones: getZones(),
  };

  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Time Zone</th>
            <th>Abbreviation &amp; Name</th>
            <th>Offset</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="tr">
          {this.state.zones.map((tz) => (
            <tr key={tz.zoneName}>
              <td>{tz.countryName}</td>
              <td>{tz.zoneName}</td>
              <td>{tz.gmtOffset}</td>
              <td>{this.formatDate(tz.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  formatDate = (ts) => {
    const d = new Date(ts);
    const tf = new Intl.DateTimeFormat("en-AU", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return tf.format(d);
  };
}

export default TimeZones;
