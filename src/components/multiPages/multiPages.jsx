import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTimeZoneList } from "../../services/timeZoneService";
import timeUtils from "../../tools/timeUtils";

class MultiPages extends Component {
  state = {
    zones: [],
  };

  render() {
    return (
      <React.Fragment>
        <h1>Multipages Australia timezone</h1>
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
              {this.state.zones.map((tz) => (
                <tr key={tz.zoneName}>
                  <td>
                    <Link
                      to={`/multipages/${timeUtils.encodeZoneName(
                        tz.zoneName
                      )}`}
                    >
                      {tz.countryName}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/multipages/${timeUtils.encodeZoneName(
                        tz.zoneName
                      )}`}
                    >
                      {tz.zoneName}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/multipages/${timeUtils.encodeZoneName(
                        tz.zoneName
                      )}`}
                    >
                      {timeUtils.convertOffset(tz.gmtOffset)}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const zones = await getTimeZoneList();
    this.setState({ zones: zones });
  }
}

export default MultiPages;
