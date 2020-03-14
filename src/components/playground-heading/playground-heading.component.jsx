import React from "react";

import { Heading, useTheme } from "evergreen-ui";

const PlaygroundHeading = ({ text }) => {
  const theme = useTheme();
  return (
    <Heading marginY={30} color={theme.colorBlack} fontWeight={300} size={900}>
      {text || "Playground"}
    </Heading>
  );
};

export default PlaygroundHeading;
