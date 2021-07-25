import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { colors } from "@themerig/core";
//assets
import {
  BabelIcon,
  CssIcon,
  EjsIcon,
  ExpressIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  JssIcon,
  MaterialUiIcon,
  MongoIcon,
  NextJsIcon,
  NodeJsIcon,
  NpmIcon,
  PhotoshopIcon,
  PythonIcon,
  ReactIcon,
  StyledComponentsIcon,
  WebpackIcon,
} from "../../assets/SVGs/assets";
//components
import Tag from "../Tag/Tag";
import { Container, Heading, Typography } from "../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  myStackContainer: {
    [`@media (max-width: ${theme.viewports.lg})`]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
  listContainer: {
    "& div": {
      margin: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px 0`,
    },
  },
}));

const MyStack = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Container
      component="section"
      id="my-stack"
      className={classes.myStackContainer}
    >
      <Heading>My Stack</Heading>
      <Typography marginBottom={`${theme.spacing(2)}px`}>
        These are the technologies that I've used so far, but I'm always open to
        expanding my toolset and learning new things!
      </Typography>
      <div className={classes.listContainer}>
        <Tag variant="card" svg={<JavascriptIcon />} name="Javascript" />
        <Tag variant="card" svg={<PythonIcon />} name="Python" />
        <Tag variant="card" svg={<ReactIcon />} name="React" />
        <Tag variant="card" svg={<HtmlIcon />} name="HTML" />
        <Tag variant="card" svg={<CssIcon />} name="CSS" />
        <Tag variant="card" svg={<GithubIcon size="md" />} name="Github" />
        <Tag variant="card" svg={<NpmIcon />} name="NPM" />
        <Tag variant="card" svg={<NodeJsIcon />} name="NodeJs" />
        <Tag variant="card" svg={<ExpressIcon />} name="ExpressJs" />
        <Tag variant="card" svg={<MongoIcon />} name="MongoDB" />
        <Tag variant="card" svg={<MaterialUiIcon />} name="Material UI" />
        <Tag variant="card" svg={<NextJsIcon />} name="NextJs" />
        <Tag variant="card" svg={<JssIcon />} name="Jss" />
        <Tag variant="card" svg={<EjsIcon />} name="EJS" />
        <Tag variant="card" svg={<PhotoshopIcon />} name="Photoshop" />
        <Tag
          variant="card"
          svg={<StyledComponentsIcon />}
          name="Styled Components"
        />
        <Tag
          className={classes.Tag}
          variant="card"
          svg={<WebpackIcon />}
          name="Webpack"
        />
        <Tag
          className={classes.Tag}
          variant="card"
          svg={<BabelIcon />}
          name="Babel"
        />
      </div>
    </Container>
  );
};

export default MyStack;
