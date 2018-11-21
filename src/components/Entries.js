import React from "react";
import Entry from "./Entry";

const mapEntries = entries =>
  entries.map((entry, i) => {
    return (
      <Entry
        key={i}
        id={entries[i].id}
        date={entries[i].date}
        text={entries[i].text}
      />
    );
  });

const Entries = ({ entries }) => <div>{mapEntries(entries)}</div>;

export default Entries;
