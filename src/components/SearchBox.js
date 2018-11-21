import React from 'react';

const SearchBox = ({ searchEntries}) => {
   return(
      <div>
         <input onChange={searchEntries} type='text' placeholder='Search entries'></input>
      </div>
   )
};

export default SearchBox;