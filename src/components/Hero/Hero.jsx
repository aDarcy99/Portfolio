import React from "react";
import { createUseStyles, useTheme } from "react-jss";
//components
import { colors } from "@themerig/core";
import Image from "next/image";
import { Typography, Button, Heading, Container } from "../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  heroContainer: {
    minHeight: "100vh",
    paddingTop: `${theme.spacing(12)}px`,
  },
  heroBody: {
    maxWidth: "600px",
  },
  projectsLink: {
    textDecoration: "none",
    padding: `${theme.spacing(2)}px`,
  },
  heroImageContainer: {
    position: "absolute",
    bottom: "100px",
    left: "50vw",
  },
  heroImage: {
    borderRadius: "50%",
  },
}));

const Hero = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Container component="section" id="hero" className={classes.heroContainer}>
      <Typography component="h1" fontSize={theme.typography.h4.fontSize}>
        Ahoy! My name is-
      </Typography>
      <Typography
        component="h1"
        fontSize={theme.typography.heroHeader.fontSize}
        fontWeight={theme.typography.heroHeader.fontWeight}
        color={theme.palette.secondary.main}
      >
        Lachlan D'Arcy
      </Typography>
      <Typography
        component="p"
        className={classes.heroBody}
        fontSize={theme.typography.h4.fontSize}
        color={colors.grey[4]}
        marginBottom={`${theme.spacing(6)}px`}
      >
        I'm a <u>self-taught developer</u> looking to make something great.
      </Typography>
      <Button variant="filled">
        <Typography
          component="a"
          href="#projects"
          className={classes.projectsLink}
          fontSize={theme.typography.h3.fontSize}
          color={theme.palette.secondary.text}
        >
          My Projects
        </Typography>
      </Button>
      <div className={classes.heroImageContainer}>
        <Image
          className={classes.heroImage}
          src={"/heroImage.jpg"}
          width={450}
          height={450}
        />
      </div>
    </Container>
  );
};

export default Hero;
