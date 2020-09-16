import React, { Component } from "react";
import { getTimeZoneDetail } from "../../services/timeZoneService";
import timeUtils from "../../tools/timeUtils";

class DetailPage extends Component {
  state = {
    zone: null,
  };

  render() {
    this.zoneName = timeUtils.decodeZoneName(this.props.match.params.zoneName);

    if (this.state.zone != null) {
      return (
        <React.Fragment>
          <h1>{this.zoneName} - detail page</h1>
          <div>Abbreviation: {this.state.zone.abbreviation}</div>
          <div>Time: {timeUtils.formatDate(this.state.zone)}</div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Unable to load</h1>
        </React.Fragment>
      );
    }
  }

  async componentDidMount() {
    const zone = await getTimeZoneDetail(this.zoneName);
    if (zone.status === "OK") {
      // API returns http status 200 and status element "OK" or "FAILED"
      this.setState({ zone: zone });
    } else {
      this.setState({ zone: null });
    }
  }
}

export default DetailPage;
