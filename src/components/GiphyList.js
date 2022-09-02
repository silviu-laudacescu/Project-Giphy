import React from "react";
import "./GiphyList.css";
import GiphyCard from "./GiphyCard";

const GiphyList = (props) => {
  const gifsImg = props.gifs.map((gif) => {
    return <GiphyCard  key={gif.id} gif={gif} />;
  });

  return <div className="giphy-list">{gifsImg}</div>;
};

export default GiphyList;
