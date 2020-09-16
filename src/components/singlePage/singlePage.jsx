import React, { Component } from "react";
import SelectedTimezone from "./selectedTimezone";
import TimeZones from "./timeZone";

import { getTimeZoneList } from "../../services/timeZoneService";
/*
 The api.timezondb.com is not stable very often it times out.
 In such a case use below mock service instead
 */
//import { getTimeZoneList } from "./services/mockTimezone";

class SinglePage extends Component {
  state = {
    zones: [],
  };

  render() {
    return (
      <div>
        <TimeZones zones={this.state.zones} onSelected={this.handleSelected} />
        <SelectedTimezone selectedZone={this.state.selectedZone} />
      </div>
    );
  }

  async componentDidMount() {
    const zones = await getTimeZoneList();
    this.setState({ zones: zones });
  }

  handleSelected = (zone) => {
    this.setState({ selectedZone: zone });
  };
}

export default SinglePage;
