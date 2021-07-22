import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import {colors} from "@themerig/core"

const useStyles = createUseStyles((theme) => ({
  outlinedVariant: {
    minHeight: "36px",
    backgroundColor: "transparent",
    color: colors.grey[3],
    border: "1px solid white",
    borderRadius: "4px",
    margin: `${theme.spacing(0.5)}px 0`,
    "&::placeholder": {
      color: colors.grey[5]
    }
  },
}));
 
export const Input = ({
  className,
  component = "input",
  variant = "outlined",
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  const Component = component;
  return (
    <Component
      className={clsx(classes.outlinedVariant, className)}
      {...props}
      placeholder={placeholder}
    />
  );
};

export default Input;
