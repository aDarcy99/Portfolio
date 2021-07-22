import Color from "color";
import React from "react";
import { createUseStyles } from "react-jss";
import { useTheme } from "theming";
//components
import Container from "../reusable/Container/Container";
import { Typography } from "../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  footer: {
    marginTop: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px 0 `,
    backgroundColor: Color(theme.palette.defaults.background).darken(0.15).toString()
    
  },
}));

const Footer = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <footer id="footer" className={classes.footer}>
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
