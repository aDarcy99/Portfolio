import Color from "color";
import React from "react";
import { createUseStyles } from "react-jss";
import { useTheme } from "theming";
//components
import Container from "../reusable/Container/Container";
import { Typography } from "../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  footerContainer: {
    marginTop: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px 0 `,
    backgroundColor: Color(theme.palette.defaults.background)
      .darken(0.15)
      .toString(),
    [`@media (max-width: ${theme.viewports.lg})`]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
}));

const Footer = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <footer id="footer" className={classes.footerContainer}>
      <Container>
        <Typography fontSize={theme.typography.body2}>
          © 2021 Lachlan D’Arcy
        </Typography>
        <Typography fontSize={theme.typography.body2}>
          Built with Next.js
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
