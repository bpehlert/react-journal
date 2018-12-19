import React from "react";

const Entry = ({ date, text }) => {
  return (
    <div>
      <h3 onClick={e => console.log(e)}>{date}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Entry;
