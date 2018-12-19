import React from "react";

const SearchBox = ({ searchEntries }) => {
  return (
    <div>
      <input
        onChange={searchEntries}
        type="text"
        placeholder="Search entries"
      />
    </div>
  );
};

export default SearchBox;
