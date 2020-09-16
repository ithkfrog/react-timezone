import React, { Component } from "react";
import timeUtils from "../../tools/timeUtils";

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
                  <td>{timeUtils.convertOffset(tz.gmtOffset)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TimeZones;
