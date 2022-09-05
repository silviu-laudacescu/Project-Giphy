import React, { useState, useEffect } from "react";
import SearchBox from "./search/SearchBox";
import giphy from "../api/giphy";
import GifList from "./gif/GifList";
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

    setState(response.data.data);

    window.localStorage.setItem("SEARCHED_TEXT", JSON.stringify(term));
  };

  return (
    <div className="container">
      <SearchBox onFormSubmit={onTermSubmit} />
      <GifList gifs={state} />
    </div>
  );
};

export default App;
