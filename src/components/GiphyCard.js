import React, { useEffect, useRef, useState } from "react";

const GiphyCard = (props) => {
  const [spans, setSpans] = useState('')
  const ref = useRef();

  // const setSpanss = ()=> {
  //   console.log(ref.current);
  // }
  useEffect(()=>{
    ref.current.addEventListener('load',
    setSpans(Math.ceil(ref.current.clientHeight/10)))
    
  })
  // const height = ref.current.clientHeight;
  // const spans = Math.ceil(height / 10);
  //     setSpans(spans)
 console.log(spans);
  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img
        ref={ref}
        alt={props.gif.title}
        src={props.gif.images.original.url}
      />
    </div>
  );
};

export default GiphyCard;
