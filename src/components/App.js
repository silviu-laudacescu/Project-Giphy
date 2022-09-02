import React, { useState } from "react";
import SearchBox from "./SearchBox";
import giphy from "../api/giphy";
import GiphyList from "./GiphyList";

const App = () => {
  const [state, setState] = useState([]);
  console.log(state);

  const onTermSubmit = async (term) => {
    const response = await giphy.get("/search", {
      params: {
        q: term,
      },
    });

    setState(response.data.data);
  };

  return (
    <div className="ui container">
      <SearchBox onFormSubmit={onTermSubmit} />
      <GiphyList gifs={state}/>
    </div>
  );
};

export default App;
