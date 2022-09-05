import React, { useState, useEffect } from "react";
import "./SearchBox.css";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
    
    window.localStorage.setItem("SEARCHED_TEXT", JSON.stringify(term));
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SEARCHED_TEXT");
    if (data !== null) setTerm(JSON.parse(data));
  }, []);

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={onSubmit}>
        <input
          placeholder="Search for GIFs"
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
