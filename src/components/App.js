import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import giphy from "../api/giphy";
import GiphyList from "./GiphyList";
import "./App.css";

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("SEARCHED_ITEMS");
    if (data !== null) setState(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("SEARCHED_ITEMS", JSON.stringify(state));
  }, [state]);

  const onTermSubmit = async (term) => {
    const response = await giphy.get("/search", {
      params: {
        q: term,
      },
    });
    
    if(window.localStorage.getItem("SEARCHED_ITEMS")){
      window.localStorage.setItem("SEARCHED_TEXT", JSON.stringify(term))
    }

    setState(response.data.data);
  };

  return (
    <div className="container">
      <SearchBox onFormSubmit={onTermSubmit} />
      <GiphyList gifs={state} />
    </div>
  );
};

export default App;
