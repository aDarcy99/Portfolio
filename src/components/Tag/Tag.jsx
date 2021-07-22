import clsx from "clsx";
import Color from "color";
import React from "react";
import { createUseStyles } from "react-jss";
//assets
//components
import { Typography } from "../reusable/reusable";

const useStyles = createUseStyles((theme) => ({
  cardTagContainer: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: `${theme.spacing(15)}px`,
    padding: `${theme.spacing(2)}px`,
    backgroundColor: theme.palette.defaults.card,
    borderRadius: "8px",
  },
  defaultTagContainer: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    marginRight: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(1)}px`,
    backgroundColor: Color(theme.palette.defaults.card).lighten(0.3).toString(),
    borderRadius: "8px",
  },
  name: (props) => ({
    margin:
      props.variant == "card"
        ? `${theme.spacing(1)}px 0 0 0`
        : `0 0 0 ${theme.spacing(1)}px`,
    textAlign: "center",
  }),
}));

//variants- tag

const Tag = ({
  className,
  component = "div",
  variant = "default",
  svg,
  name,
  ...props
}) => {
  const classes = useStyles({ variant });
  const Component = component;
  return (
    <Component {...props} className={clsx(classes[`${variant}TagContainer`], className)}>
      {svg}
      <Typography className={classes.name} fontWeight="500">
        {name}
      </Typography>
    </Component>
  );
};

export default Tag;
