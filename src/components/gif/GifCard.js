import React, { useEffect, useRef, useState } from "react";

const GifCard = (props) => {
  const [spans, setSpans] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current.addEventListener("load", spacing);
  }, []);

  const spacing = () => {
    const height = ref.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    setSpans(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={ref}
        alt={props.gif.title}
        src={props.gif.images.preview_webp.url}
      />
    </div>
  );
};

export default GifCard;
