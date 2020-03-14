import React from "react";

import { Pane, Text, useTheme } from "evergreen-ui";

const PlaygroundItem = props => {
  const theme = useTheme();

  const { title, subtitle, children } = props;

  return (
    <Pane
      className="playground-item"
      paddingX={30}
      paddingY={20}
      marginTop={40}
      borderRadius={10}
      minWidth={200}
      minHeight={200}
      style={{ alignSelf: "flex-start" }}
      background={theme.colorGray}
    >
      <Text size={500} color={theme.colorBlack}>
        {title}
      </Text>
      <br />
      <Text size={300} color={theme.colorBlack}>
        {subtitle}
      </Text>
      <Pane
        className="item-container"
        display="flex"
        paddingX={10}
        paddingY={20}
        // justifyContent="center"
        alignItems="center"
      >
        {children}
      </Pane>
    </Pane>
  );
};

export default PlaygroundItem;
