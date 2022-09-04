import React, { useState, useEffect } from "react";
import "./SearchBox.css";

const SearchBox = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SEARCHED_TEXT");
    if (data !== null) setTerm(JSON.parse(data));
  }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {/* <label>VSp</label> */}
        <input
          placeholder="Search for GIFs"
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;

// return (
//   <div className="search-bar ui segment">
//     <form onSubmit={onSubmit} className="ui form">
//       <div className="field">
//         <label>Giphy Search</label>
//         <input
//         placeholder="Search for GIFs"
//           value={term}
//           type="text"
//           onChange={(e) => setTerm(e.target.value)}
//         />
//       </div>
//     </form>
//   </div>
// );
// };
