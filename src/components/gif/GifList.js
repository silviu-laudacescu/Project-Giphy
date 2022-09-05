import React from "react";
import "./GifList.css";
import GifCard from "./GifCard";

const GifList = (props) => {
  const gifsImg = props.gifs.map((gif) => {
    return <GifCard key={gif.id} gif={gif} />;
  });

  return <div className="gif-list">{gifsImg}</div>;
};

export default GifList;
