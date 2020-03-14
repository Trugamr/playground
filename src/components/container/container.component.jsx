import React from "react";
import "./container.styles.scss";

import { Pane, useTheme } from "evergreen-ui";

const Container = ({ children }) => {
  const theme = useTheme();

  return (
    <Pane
      className="container"
      flexDirection="column"
      style={{ background: theme.colorWhite }}
      paddingY={50}
    >
      <Pane maxWidth="50rem" margin="auto">
        {children}
      </Pane>
    </Pane>
  );
};
export default Container;
