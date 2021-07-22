import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { colors } from "@themerig/core";
import Color from "color";
//assets
import { GithubIcon } from "../../../assets/SVGs/technologies/GithubIcon";
//components
import ReadMore from "../../reusable/ReadMore/ReadMore";
import { Button, Typography } from "../../reusable/reusable";
import Tag from "../../Tag/Tag";
import { LinkIcon } from "../../../assets/SVGs/assets";

const useStyles = createUseStyles((theme) => ({
  itemContainer: {
    marginBottom: `${theme.spacing(8)}px`,
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
    borderRadius: "8px",
    display: "flex",
    transition: "all 0.3s",
    backgroundColor: theme.palette.defaults.card,
  },
  itemContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: `${theme.spacing(4)}px`,
  },
  itemImage: {},
  builtWithContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: `${theme.spacing(2)}px`,
    "& > :first-child": {
      marginRight: `${theme.spacing(1)}px`,
    },
  },
  bottomContent: {
    marginTop: "auto",
  },
  livePreviewButton: {
    marginRight: `${theme.spacing(1)}px`,
  },
  numberContainer: {
    position: "relative",
    borderRight: "1px solid white",
    display: "flex",
    alignItems: "flex-end",
    marginLeft: `${theme.spacing(3)}px`,
  },
  numberWrapper: {
    transform: "rotateZ(-90deg)",
  },
}));

const ProjectItem = ({
  title = "Title",
  image,
  description = "Description",
  builtWith = ["Javascript", "Css", "Html"],
  number,
  ...props
}) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <section className={classes.itemContainer}>
      <img src={image} className={classes.itemImage} />
      {/* <div className={classes.numberContainer}>
        <Typography
          className={classes.numberWrapper}
          fontSize={theme.typography.body2.fontSize}
          color={theme.palette.secondary.main}
        >
          {number}
        </Typography>
      </div> */}
      <div className={classes.itemContent}>
        <Typography component="h2" marginBottom={`${theme.spacing(2)}px`}>
          {title}
        </Typography>
        <Typography
          marginBottom={`${theme.spacing(1)}px`}
          color={colors.grey[4]}
          lineHeight="140%"
        >
          {description}
        </Typography>
        {/* <ReadMore href="/" /> */}
        <div className={classes.bottomContent}>
          <div className={classes.builtWithContainer}>
            <Typography
              marginBottom={`${theme.spacing(1)}px`}
              color={colors.grey[4]}
            >
              Built With:{" "}
            </Typography>
            {builtWith.map((technology) => (
              <Tag
                key={technology.name}
                {...technology}
              />
            ))}
          </div>
          <Button className={classes.livePreviewButton} radius="0px">
            Live Preview <LinkIcon size="sm" color={theme.palette.primary.text} />
          </Button>
          <Button variant="outlined">
            Github <GithubIcon size="sm" color={theme.palette.primary.main} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
