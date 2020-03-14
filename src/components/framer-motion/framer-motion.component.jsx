import React, { useState } from "react";
import "./framer-motion.styles.scss";

import faker from "faker";

import { useTheme, TextInput, Text } from "evergreen-ui";
import { motion } from "framer-motion";

import CustomButton from "../custom-button/custom-button.component";

export const FramerMotion1 = () => {
  const [active, setActive] = useState(false);

  const spring = {
    type: "spring",
    damping: 16,
    stiffness: 200
  };

  const variants = {
    inactive: {
      x: 0,
      scale: 1,
      borderRadius: 40
    },
    active: {
      x: 200,
      scale: 1.2,
      borderRadius: 100
    }
  };

  return (
    <div>
      <motion.div
        className="framer-motion-1__box"
        transition={spring}
        initial="inactive"
        animate={active ? "active" : "inactive"}
        variants={variants}
      >
        <h1>smile.</h1>
      </motion.div>
      <br />
      <br />
      <CustomButton onClick={() => setActive(active => !active)}>
        {active ? "back" : "forward"}
      </CustomButton>
    </div>
  );
};

export const FramerMotion2 = () => {
  const [active, setActive] = useState(true);

  const variants = {
    initial: custom => ({
      y: -20,
      scale: 0,
      opacity: 0,
      transition: {
        delay: custom * 0.1
      }
    }),
    visible: custom => ({
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.2
      }
    })
  };

  return (
    <motion.div className="framer-motion-2">
      <ul className="list">
        <motion.li
          custom={0}
          initial="initial"
          animate={active ? "visible" : "initial"}
          variants={variants}
        >
          be kind
        </motion.li>
        <motion.li
          custom={1}
          initial="initial"
          animate={active ? "visible" : "initial"}
          variants={variants}
        >
          be sad
        </motion.li>
        <motion.li
          custom={2}
          initial="initial"
          animate={active ? "visible" : "initial"}
          variants={variants}
        >
          laugh
        </motion.li>
        <motion.li
          custom={3}
          initial="initial"
          animate={active ? "visible" : "initial"}
          variants={variants}
        >
          cry sometimes
        </motion.li>
      </ul>

      <br />
      <br />

      <CustomButton onClick={() => setActive(active => !active)}>
        {active ? "hide" : "show"}
      </CustomButton>
    </motion.div>
  );
};

export const FramerMotion3 = () => {
  faker.seed(4);
  faker.locale = "en_IND";

  const [arrayRange, setArrayRange] = useState(8);
  const [active, setActive] = useState(true);

  const theme = useTheme();
  const range = n => [...Array(n).keys()];

  const handleChange = event => {
    const num = parseInt(event.target.value, 10);
    if (num <= 20 && num > 0) setArrayRange(num);
  };

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const variants = {
    hidden: {
      y: -20,
      scale: 0,
      opacity: 0
    },
    show: {
      y: 0,
      scale: 1,
      opacity: 1
    }
  };

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300
  };

  return (
    <div className="framer-motion-3">
      <Text color={theme.colorBlack}>Change no. of list items: </Text>
      <TextInput
        type="number"
        placeholder="Enter no. of list items"
        onChange={handleChange}
        value={arrayRange}
        width={50}
      />

      <CustomButton
        onClick={() => setActive(active => !active)}
        style={{ marginLeft: 10 }}
      >
        {active ? "hide" : "show"}
      </CustomButton>

      <br />
      <br />

      <motion.ul
        className="list"
        initial="hidden"
        animate={active ? "show" : "hidden"}
        variants={container}
      >
        {range(arrayRange).map(n => (
          <motion.li
            transition={spring}
            key={n}
            initial="hidden"
            variants={variants}
          >
            {faker.name.firstName()}
          </motion.li>
        ))}
      </motion.ul>
      <br />
      <br />
    </div>
  );
};

export const FramerMotion4 = () => {
  const variants = {
    spinning: {
      rotate: 360,
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 1.2
      }
    }
  };
  return (
    <div className="framer-motion-4">
      <motion.div
        className="circle-spinner"
        animate="spinning"
        variants={variants}
      />
    </div>
  );
};
