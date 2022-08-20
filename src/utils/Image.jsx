import { useState, Fragment } from "react";

export default function Image (props) {
    const [isLoaded, setIsLoaded] = useState(false);
    let {src, thumb, ...properties} = props
    return (
      <Fragment>
        <img
          layout="fill" 
          objectFit="contain"
          className="absolute z-10 top-0 left-0 transition-all duration-300"
          style={{ visibility: isLoaded ? "hidden" : "visible" }}
          src={thumb}
        />
        <img
          onLoad={() => { setIsLoaded(true); }}
          layout="fill" 
          objectFit="contain"
          className="transition-opacity duration-300 border border-[0.02em]"
          style={{ opacity: isLoaded ? 1 : 0 }}
          src={src}
        />
      </Fragment>
    );
  };