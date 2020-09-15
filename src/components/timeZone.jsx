import React, { Component } from "react";
import { getZones } from "../services/mockTimezone";

class TimeZones extends Component {
  state = {
      zones : getZones()
  };

  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Time Zone</th>
            <th>Abbreviation &amp; Name</th>
            <th>Offset</th>
          </tr>
        </thead>
        <tbody className="tr">
            {this.state.zones.map(tz => 
                      <tr key={tz.zoneName}>
                      <td>{tz.countryName}</td>
                      <td>{tz.zoneName}</td>
                      <td>{tz.timestamp}</td>
                    </tr>
                )}

        </tbody>
      </table>
    );
  }
}

export default TimeZones;
