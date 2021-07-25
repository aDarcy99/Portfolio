import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import Link from "next/link";
//assets
import EmailIcon from "../../assets/SVGs/socials/EmailIcon";
import LinkedInIcon from "../../assets/SVGs/socials/LinkedInIcon";
import { GithubIcon } from "../../assets/SVGs/assets";
//components
import { Heading, Container, Typography } from "../reusable/reusable";
import Tag from "../Tag/Tag";

const useStyles = createUseStyles((theme) => ({
  getInTouchContainer: {
    [`@media (max-width: ${theme.viewports.lg})`]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
  platform: {
    cursor: "pointer",
    color: theme.palette.defaults.text.body,
    textDecoration: "none",
    marginRight: `${theme.spacing(2)}px`,
    transition: "all 0.3s",
    "& path": {
      transition: "all 0.3s",
    },
    "&:hover": {
      color: theme.palette.primary.main,
      "& path": {
        fill: theme.palette.primary.main,
      },
    },
    [`@media (max-width: ${theme.viewports.sm})`]: {
      marginBottom: theme.spacing(2, "px")
    },
    [`@media (max-width: ${theme.viewports.xs})`]: {
      width: "100%"
    },
  },
}));

const GetInTouch = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Container
      id="get-in-touch"
      component="section"
      className={classes.getInTouchContainer}
    >
      <Heading number="3.0">Get In Touch</Heading>
      <Typography marginBottom={`${theme.spacing(2)}px`}>
        I’m currently looking for work in Sydney and Brisbane. If you like my
        work, consider contacting me through one of these platforms.
      </Typography>
      <div>
        {[
          {
            svg: <EmailIcon />,
            name: "Email",
            href: "mailto:darcylachlan@hotmail.com.au",
          },
          {
            svg: <LinkedInIcon />,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/lachlan-d-arcy-161241208/",
          },
          {
            svg: <GithubIcon />,
            name: "Github",
            href: "https://github.com/aDarcy99",
          },
        ].map((platform) => (
          <Tag
            key={platform.name}
            component="a"
            variant="card"
            className={classes.platform}
            target="_blank"
            {...platform}
          />
        ))}
      </div>
    </Container>
  );
};

export default GetInTouch;
