import React from "react";

const GiphyList = ({ gifs }) => {
  const gifsImg = gifs.map((gif) => {
   
    return <img key={gif.id} src={gif.images.fixed_height.url} />;
  });

  return <div>{gifsImg}</div>;
};

export default GiphyList;
