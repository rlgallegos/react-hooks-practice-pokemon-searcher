import React from "react";

function Search({searchInput, onFilter}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchInput} onChange={onFilter} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
