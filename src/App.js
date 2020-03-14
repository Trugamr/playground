import React, { useState } from "react";
import "./styles.scss";

import Header from "./components/header/header.component";
import Container from "./components/container/container.component";
import PlaygroundHeading from "./components/playground-heading/playground-heading.component";
import PlaygroundItem from "./components/playground-item/playground-item.component";

import {
  FramerMotion1,
  FramerMotion2,
  FramerMotion3,
  FramerMotion4
} from "./components/framer-motion/framer-motion.component";

import { SpringReact1 } from "./components/spring-react/spring-react.component";

import { Pane, ThemeProvider, defaultTheme } from "evergreen-ui";

const themeLight = {
  ...defaultTheme,
  colorBlack: "#3e3e3e",
  colorWhite: "#fafaf6",
  colorGray: "#efecec"
};

const themeDark = {
  ...defaultTheme,
  colorBlack: "#fafaf6",
  colorWhite: "#1e1e1e",
  colorGray: "#2e2e2e",
  fills: {
    solid: {
      blue: {
        color: "white",
        background: "red"
      }
    }
  }
};

export default function App() {
  const [isThemeDark, setDarkTheme] = useState(false);

  return (
    <ThemeProvider value={isThemeDark ? themeDark : themeLight}>
      <Pane
        paddingTop={20}
        paddingX={20}
        minHeight="100vh"
        background={isThemeDark ? themeDark.colorWhite : themeLight.colorWhite}
      >
        <Header isThemeDark={isThemeDark} setDarkTheme={setDarkTheme} />
        <Container>
          <PlaygroundHeading />

          <PlaygroundItem
            title="Animated progress"
            subtitle="animating numbers using react spring"
          >
            <SpringReact1 />
          </PlaygroundItem>

          <PlaygroundItem
            title="Spinning Loader"
            subtitle="spins indefinittely..."
          >
            <FramerMotion4 />
          </PlaygroundItem>

          <PlaygroundItem title="List animation" subtitle="stagger animation">
            <FramerMotion3 />
          </PlaygroundItem>

          <PlaygroundItem
            title="Another list animation"
            subtitle="stagger animation"
          >
            <FramerMotion2 />
          </PlaygroundItem>

          <PlaygroundItem
            title="Properties animation"
            subtitle="scale, position, radius animation"
          >
            <FramerMotion1 />
          </PlaygroundItem>
        </Container>
      </Pane>
    </ThemeProvider>
  );
}
