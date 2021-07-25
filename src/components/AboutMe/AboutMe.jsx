import React from "react";
import { createUseStyles } from "react-jss";
//components
import { Container, Heading, Typography } from "../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  aboutMeContainer: {
    [`@media (max-width: ${theme.viewports.lg})`]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();
  return (
    <Container
      component="section"
      id="about-me"
      className={classes.aboutMeContainer}
    >
      <Heading>About Me</Heading>
      <Typography>
        🚧 This section is currently under construction 🚧
      </Typography>
    </Container>
  );
};

export default AboutMe;
