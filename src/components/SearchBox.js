import React, { useState } from "react";

const SearchBox = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  console.log(term);

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Giphy Search</label>
          <input
            value={term}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
