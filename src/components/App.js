import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Entries from "./Entries";
import { entries } from "../entries";
import PickDate from "./PickDate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      entries: entries
    };
  }

  searchEntries = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredEntries = this.state.entries.filter(entry => {
      return entry.text
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div>
        <header>
          <h1>Letter</h1>
        </header>
        <SearchBox searchEntries={this.searchEntries} />
        <PickDate />
        <Entries entries={filteredEntries} />
      </div>
    );
  }
}

export default App;
