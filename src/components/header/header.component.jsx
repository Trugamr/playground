import React, { useState } from "react";

import { Pane, Switch, Button, useTheme } from "evergreen-ui";

const Header = ({ isThemeDark, setDarkTheme }) => {
  const [isChecked, setChecked] = useState(isThemeDark);
  const theme = useTheme();

  return (
    <Pane
      padding={20}
      borderRadius={10}
      maxWidth="60rem"
      display="flex"
      background={theme.colorGray}
      margin="auto"
      justifyContent="center"
    >
      <h2 style={{ flex: "1", color: theme.colorBlack }}>^_^</h2>
      <Switch
        height={24}
        checked={isChecked}
        hasCheckIcon={false}
        onChange={e => {
          setDarkTheme(!isChecked);
          setChecked(e.target.checked);
        }}
      />
    </Pane>
  );
};

export default Header;
