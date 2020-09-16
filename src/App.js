import React, { Component } from "react";
import SelectedTimezone from "./components/selectedTimezone";
import TimeZones from "./components/timeZone";

import { getTimeZoneList } from "./services/timeZoneService";
/*
 The api.timezondb.com is not stable very often it times out.
 In such a case use below mock service instead
 */
//import { getTimeZoneList } from "./services/mockTimezone";

class App extends Component {
  state = {
    zones: [],
    selectedZone: null,
  };

  render() {
    return (
      <div className="container">
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

export default App;
