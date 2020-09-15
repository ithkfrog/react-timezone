import React, { Component } from "react";
import SelectedTimezone from "./components/selectedTimezone";
import TimeZones from "./components/timeZone";
import { getZones } from "./services/mockTimezone";

class App extends Component {
  state = {
    zones: getZones(),
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

  handleSelected = (zone) => {
    console.log(zone.timeZone);
    this.setState({ selectedZone: zone });
  };
}

export default App;
