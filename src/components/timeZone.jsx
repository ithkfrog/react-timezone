import React, { Component } from "react";
import SelectedTimezone from "./selectedTimezone";

class TimeZones extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Australia timezone</h1>
        <div>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Time Zone</th>
                <th>Abbreviation &amp; Name</th>
                <th>Offset</th>
              </tr>
            </thead>
            <tbody className="tr">
              {this.props.zones.map((tz) => (
                <tr
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.onSelected(tz)}
                  key={tz.zoneName}
                >
                  <td>{tz.countryName}</td>
                  <td>{tz.zoneName}</td>
                  <td>{this.convertOffset(tz.gmtOffset)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  convertOffset = (t) => {
    return t / 60 / 60;
  };

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
