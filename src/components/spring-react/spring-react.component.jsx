import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import "./spring-react.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

export const SpringReact1 = () => {
  const [progress, setProgress] = useState(30);
  const props = useSpring({ number: progress, config: config.slow });

  return (
    <div className="spring-react-1">
      <animated.progress max="100" value={props.number} className="progress" />
      <br />
      <br />
      <div>
        <CustomButton onClick={() => setProgress(0)}>0%</CustomButton>
        <CustomButton onClick={() => setProgress(20)}>20%</CustomButton>
        <CustomButton onClick={() => setProgress(40)}>40%</CustomButton>
        <CustomButton onClick={() => setProgress(60)}>60%</CustomButton>
        <CustomButton onClick={() => setProgress(80)}>80%</CustomButton>
        <CustomButton onClick={() => setProgress(100)}>100%</CustomButton>
      </div>
    </div>
  );
};
