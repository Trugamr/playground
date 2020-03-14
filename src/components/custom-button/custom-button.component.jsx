import React from "react";
import { useTheme } from "evergreen-ui";
import { motion } from "framer-motion";

import "./custom-button.styles.scss";

const CustomButton = ({ children, style, ...otherProps }) => {
  const theme = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="button"
      style={{
        color: theme.colorBlack,
        background: theme.colorWhite,
        ...style
      }}
      {...otherProps}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
