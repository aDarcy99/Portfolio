import React from "react";
//assets
import {
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  JssIcon,
  NextJsIcon,
  NodeJsIcon,
  NpmIcon,
  ReactIcon,
  StyledComponentsIcon,
  WebpackIcon,
  BabelIcon,
} from "../../assets/SVGs/assets";
//components
import { Heading, Container } from "../reusable/reusable";
import ProjectItem from "./ProjectItem/Projectitem";

const Projects = ({ children, ...props }) => {
  return (
    <Container component="section" id="projects">
      <Heading number="1.0">Projects</Heading>
      {[
        {
          title: "Your Chances",
          image: "https://picsum.photos/450/300",
          links: {
            github: "https://github.com/aDarcy99/your-chances",
            demo: "https://your-chances.herokuapp.com/",
          },
          description:
            "One of my first projects. Using data from the CIA World Factbook, it gives you the chances of being born in a certain country.",
          builtWith: [
            { svg: <JavascriptIcon />, name: "Javascript" },
            { svg: <ReactIcon />, name: "React" },
            { svg: <StyledComponentsIcon />, name: "Styled Components" },
            { svg: <NodeJsIcon />, name: "NodeJS" },
            { svg: <WebpackIcon />, name: "Webpack" },
            { svg: <BabelIcon />, name: "Babel" },
          ],
        },
        {
          title: "Simple Typing Test",
          image: "https://picsum.photos/450/300",
          links: {
            github: "https://github.com/aDarcy99/typing-test",
            demo: "https://very-simple-typing-test.herokuapp.com/",
          },
          description:
            "After using React for a while, I wanted to create something with vanilla Javascript  again, so I created a simple typing test. It made me appreciate how easy it is to build web apps with React. ",
          builtWith: [
            { svg: <JavascriptIcon />, name: "Javascript" },
            { svg: <CssIcon />, name: "CSS" },
            { svg: <HtmlIcon />, name: "HTML" },
          ],
        },
        {
          title: "Portfolio",
          image: "https://picsum.photos/450/300",
          links: {
            github: "https://github.com/aDarcy99/Portfolio",
            demo: "",
          },
          description: `
          This website, which went through a lot of revisions to get where it is now. Sadly design has never come as easily to me as other aspects of web development, 
          even though I have a passion for it. Although this has led me to wanting to find patterns and systems to define design.
            `,
          builtWith: [
            { svg: <JavascriptIcon />, name: "Javascript" },
            { svg: <ReactIcon />, name: "React" },
            { svg: <NextJsIcon />, name: "NextJS" },
            { svg: <JssIcon />, name: "JSS" },
            { svg: <></>, name: "themerig/core" },
          ],
        },
        {
          title: "Themerig/core",
          image: "https://picsum.photos/450/300",
          links: {
            github: "https://github.com/aDarcy99/themerig",
            demo: "#",
          },
          description: `
            A customizable theme component I created which is inspired by Material UI's theme component except with a lot of the missing functionality I found it was missing.
            I plan to make a component library for react that uses this theme in the future.
          `,
          builtWith: [
            { svg: <JavascriptIcon />, name: "Javascript" },
            { svg: <JssIcon />, name: "JSS" },
            { svg: <NpmIcon />, name: "NPM" },
          ],
        },
        {
          title: "The Royal Game of Ur",
          image: "https://picsum.photos/450/300",
          links: {
            github: "#",
            demo: "#",
          },
          description: `
            I recreated a 4000 year old game.
          `,
          builtWith: [
            { svg: <JavascriptIcon />, name: "Javascript" },
            { svg: <ReactIcon />, name: "React" },
            { svg: <StyledComponentsIcon />, name: "Styled Components" },
            { svg: <NodeJsIcon />, name: "NodeJS" },
            { svg: <WebpackIcon />, name: "Webpack" },
            { svg: <BabelIcon />, name: "Babel" },
          ],
        },
      ].map((project, projectIdx) => (
        <ProjectItem key={projectIdx} {...project} />
      ))}
    </Container>
  );
};

export default Projects;
